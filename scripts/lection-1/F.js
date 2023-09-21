const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');

const [a1, b1, a2, b2] = fileContent.split(' ').map(el => Number(el));

function getBigger(a, b) {
  return a > b ? a : b;
}

const variants = [

  {

    side1: a1 + a2,

    side2: getBigger(b1, b2)

  },

  {

    side1: a1 + b2,

    side2: getBigger(b1, a2)

  },

  {

    side1: b1 + a2,

    side2: getBigger(a1, b2)

  },

  {

    side1: b1 + b2,

    side2: getBigger(a1, a2)

  }

];

variants.forEach((el) => {
  el.area = el.side1 * el.side2;
});

variants.sort((a, b) => {
  return a.area - b.area;
});

fs.writeFileSync('output.txt', String([variants[0].side1, variants[0].side2].join(' ')));
