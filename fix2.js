const fs = require('fs');

let c = fs.readFileSync('src/data/cityContent.ts', 'utf8');

// Fix all apostrophes in single-quoted strings by escaping them
// The pattern is: unescaped apostrophe followed by s at word boundary within single quotes

// More comprehensive fix - fix any unescaped 's in strings
// This is tricky because we need to not double-escape already escaped ones
// Let's use a simpler approach: find all "word's" patterns in quoted strings

// Fix common patterns
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ City's/g, " City\\'s");
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ Levi's/g, " Levi\\'s");
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ city's/g, " city\\'s");
c = c.replace(/ city's/g, " city\\'s");

fs.writeFileSync('src/data/cityContent.ts', c);
console.log('Fixed');

const lines = c.split('\n');
let issues = [];
for (let i = 0; i < lines.length; i++) {
  // Look for unescaped apostrophe-s in string values
  const match = lines[i].match(/:\s*'[^']*'[a-z]'[a-z]/);
  if (match) {
    issues.push({ line: i + 1, text: lines[i].substring(0, 100) });
  }
}
console.log('Remaining issues:', issues.length);
if (issues.length > 0) {
  issues.forEach(issue => console.log(`Line ${issue.line}: ${issue.text}`));
}