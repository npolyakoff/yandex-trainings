const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');

const [k1, m, k2, p2, n2] = fileContent.split(' ').map(el => Number(el));

let p1; let n1; let q = 0;

let qMax; let qMin = 0;

qMax = (k2 / (m * (p2 - 1) + n2 - 1));

qMin = (k2 / (m * (p2 - 1) + n2 + 1));

q = Math.floor(qMax) === Math.ceil(qMin) ? Math.floor(qMax) : Math.ceil((qMax + qMin)/2);

const maxFlats = m * q;

console.log(qMax, qMin);

console.log(q);

if (m === 1) {
  n1 = 1;

  p1 = (k1 < k2) && p2 === 1 ? p2 : 0;
} else if (k2 <= m * (p2 - 1)) {
  n1 = p1 = -1;
} else if (n2 === 1 && p2 === 1) {
  n1 = k1 < k2 ? n2 : 0;

  p1 = (k1 < k2) || ((k2 - k1) < k2)? p2 : 0;
} else {
  if (k1 <= maxFlats) {
    p1 = 1;
  } else {
    p1 = Math.ceil(k1 / maxFlats);
  }

  n1 = Math.ceil((k1 - ((p1 - 1) * maxFlats)) / q);
}

fs.writeFileSync('output.txt', String([p1, n1].join(' ')));
