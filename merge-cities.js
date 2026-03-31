const fs = require('fs');
const path = require('path');

// Read the original cityContent.ts file
const originalContent = fs.readFileSync(path.join(__dirname, 'src/data/cityContent.ts'), 'utf8');

// Extract the base (first 8 cities + start of default)
const baseMatch = originalContent.match(/export const cityContent[\s\S]*?};\s*$/m);
const base = baseMatch[0];

// Parse the original - we need to keep existing 8 cities exactly as is
// Then add all batch content
// Then add default at end

// Read all batch files
const batch1 = require('./city-content-batch1.ts');
const batch2 = require('./city-content-batch2.ts');
const batch3 = require('./city-content-batch3.ts');

console.log('Loaded batches');
console.log('Batch 1 keys:', Object.keys(batch1Content));
console.log('Batch 2 keys:', Object.keys(batch2Content));
console.log('Batch 3 keys:', Object.keys(batch3Content));