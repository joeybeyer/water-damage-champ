const fs = require('fs');

const files = [
  'city-content-batch1.ts',
  'city-content-batch2.ts', 
  'city-content-batch3.ts'
];

files.forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  
  // Fix apostrophes in strings - these patterns appear in the content
  c = c.replace(/The city's/g, "The city\\'s");
  c = c.replace(/ city's/g, " city\\'s");
  c = c.replace(/ City's/g, " City\\'s");
  
  fs.writeFileSync(file, c);
  console.log('Fixed', file);
});

console.log('Done fixing batch files');