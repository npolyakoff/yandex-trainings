const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');

const [a, b, c, d, e] = fileContent.split('\n').map(el => Number(el));

let result = '';

const variants = [

  { a, b, s: a*b },

  { a: b, b: c, s: b*c },

  { a, b: c, s: a*c }

];

const S = d*e;

const arr = variants.filter(el => S >= el.s);

if (arr.length == 0) {
  result = 'NO';
} else {
  const P = 2 * (d + e);

  arr.forEach((el) => {
    const newP = 2 * (el.a + el.b);

    el.p = newP;
  });

  const candidates = arr.filter(el => el.p <= P);

  const results = candidates.map(el => {
    if ((d < el.a && d < el.b) || (e < el.a && e < el.b)) {
      return 'NO';
    } else {
      return 'YES';
    }
  });

  result = results.some(el => el === 'YES') ? 'YES' : 'NO';
}

fs.writeFileSync('output.txt', String(result));
