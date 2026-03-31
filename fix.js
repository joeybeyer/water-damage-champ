const fs = require('fs');

// Fix the unescaped apostrophe in Pacifica's in batch1
let c = fs.readFileSync('city-content-batch1.ts', 'utf8');
c = c.replace(/Pacifica's/g, "Pacifica\\'s");
fs.writeFileSync('city-content-batch1.ts', c);
console.log('Fixed batch1');

// Check batch2 for similar issues
const c2 = fs.readFileSync('city-content-batch2.ts', 'utf8');
const issues2 = c2.match(/[a-z]'[a-z]/g);
console.log('Batch2 potential issues:', issues2 ? [...new Set(issues2)] : 'none');

// Check batch3
const c3 = fs.readFileSync('city-content-batch3.ts', 'utf8');
const issues3 = c3.match(/[a-z]'[a-z]/g);
console.log('Batch3 potential issues:', issues3 ? [...new Set(issues3)] : 'none');