const fs = require('fs');

// Fix Levi's in batch3
let c = fs.readFileSync('city-content-batch3.ts', 'utf8');
c = c.replace(/Levi's/g, "Levi\\'s");
fs.writeFileSync('city-content-batch3.ts', c);
console.log('Fixed Levis in batch3');

// Re-run merge
const originalContent = fs.readFileSync('src/data/cityContent.ts', 'utf8');

// Get original section (between = { and // Default)
const startIdx = originalContent.indexOf('= {') + 3;
const defaultIdx = originalContent.indexOf('// Default');
let originalSection = originalContent.substring(startIdx, defaultIdx).trim();
originalSection = originalSection.replace(/,\s*$/, '');

// Function to extract body from batch files
function extractBody(content) {
  const eqPos = content.indexOf('= {');
  const firstBrace = eqPos + 2;
  
  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  let end = firstBrace;
  
  for (let i = firstBrace; i < content.length; i++) {
    const char = content[i];
    const prev = content[i-1];
    
    if (!inString) {
      if (char === '"' || char === "'") {
        inString = true;
        stringChar = char;
      }
    } else {
      if (char === stringChar && prev !== '\\') {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '{') braceCount++;
      if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          end = i;
          break;
        }
      }
    }
  }
  let body = content.substring(firstBrace + 1, end).trim();
  body = body.replace(/,\s*$/, '');
  return body;
}

const batch1 = extractBody(fs.readFileSync('city-content-batch1.ts', 'utf8'));
const batch2 = extractBody(fs.readFileSync('city-content-batch2.ts', 'utf8'));
const batch3 = extractBody(fs.readFileSync('city-content-batch3.ts', 'utf8'));

function addExtraIndent(text) {
  return text.split('\n').map(line => '  ' + line).join('\n');
}

const merged = `export const cityContent: Record<string, { neighborhoods: string[]; landmarks: string; climate: string; faqs: { question: string; answer: string }[] }> = {
${originalSection},

${addExtraIndent(batch1)},

${addExtraIndent(batch2)},

${addExtraIndent(batch3)},

  'default': {
    neighborhoods: ['Downtown', 'Historic District', 'Residential Areas'],
    landmarks: 'Local landmarks and attractions',
    climate: 'Varied climate with seasonal weather patterns. Regular maintenance can prevent most water damage.',
    faqs: [
      { question: 'Do you service this area?', answer: 'Yes! We provide complete water damage restoration services throughout this region.' },
      { question: 'What causes water damage in this area?', answer: 'Common causes include burst pipes, appliance failures, roof leaks, and severe weather events.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours of your call, depending on location and availability.' },
      { question: 'Do you work with insurance companies?', answer: 'Yes, we work directly with all major insurance carriers and can help verify your coverage.' },
      { question: 'Can you handle mold remediation?', answer: 'Yes, we provide comprehensive mold remediation services as part of our restoration process.' }
    ]
  }
};

export function getCityContent(slug: string) {
  return cityContent[slug] || cityContent['default'];
}`;

fs.writeFileSync('src/data/cityContent.ts', merged);
console.log('Merged file written');

// Now fix apostrophes in the merged file
let mc = fs.readFileSync('src/data/cityContent.ts', 'utf8');
mc = mc.replace(/ city's/g, " city\\'s");
mc = mc.replace(/ City's/g, " City\\'s");
mc = mc.replace(/ Levi's/g, " Levi\\'s");
fs.writeFileSync('src/data/cityContent.ts', mc);
console.log('Fixed apostrophes in merged file');

// Verify
const entries = merged.match(/'[a-z0-9-]+':/g);
console.log('Total entries:', entries ? entries.length : 0);