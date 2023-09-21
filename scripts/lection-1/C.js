const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');

const numbers = fileContent.split('\n').map(el => el.replace(/\D/g,''));

const numbersToCheck = numbers.slice(1, -1);

const newNumber = numbers[0];

const results = [];

numbersToCheck.forEach(num => {
  if (num.length === 7) {
    '495' + num === newNumber.slice(1) ? results.push('YES') : results.push('NO');
  } else {
    num.slice(1) === newNumber.slice(1) ? results.push('YES') : results.push('NO');
  }
});

fs.writeFileSync('output.txt', String(results.join('\n') + '\n'));
