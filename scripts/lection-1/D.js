const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');

const [a, b, c] = fileContent.split('\n').map(el => Number(el));

let x = null;

if (c < 0) {
  x = 'NO SOLUTION';
} else if (a == 0 && b == 0 && c == 0) {
  x = 'MANY SOLUTIONS';
} else if (a == 0 && (c**2 - b == 0)) {
  x = 'MANY SOLUTIONS';
} else {
  x = (c**2 - b) / a;

  x = Number.isInteger(x) ? x : 'NO SOLUTION';
}

fs.writeFileSync('output.txt', String(x));
