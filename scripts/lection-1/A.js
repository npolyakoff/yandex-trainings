const fs = require('fs');
const fileContent = fs.readFileSync('./input.txt', 'utf8');
const [temperatures, regime] = fileContent.toString().split('\n');
const [start, end] = temperatures.split(' ').map(el => Number(el));
let result = 0;

switch (regime) {
  case 'heat':
    result = start > end ? start : end;
    break;
  case 'freeze':
    result = start < end ? start : end;
    break;
  case 'fan':
    result = start;
    break;
  case 'auto':
    result = end;
    break;
}

fs.writeFileSync('output.txt', String(result));
