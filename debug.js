const fs = require('fs');

// Check original file indentation
const original = fs.readFileSync('src/data/cityContent.ts', 'utf8');
const lines = original.split('\n');

console.log('Original file first 20 lines:');
for (let i = 0; i < 20; i++) {
  console.log(`${i}: ${JSON.stringify(lines[i])}`);
}