const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf8');
const [a, b, c] = fileContent.split('\n').map(el => Number(el));
let result = '';

if (a < 0 || b < 0 || c < 0) {
  result = 'NO';
}

if ((a + b) > c && (a + c) > b && (c + b) > a) {
  result = 'YES';
} else {
  result = 'NO';
}

fs.writeFileSync('output.txt', String(result));
