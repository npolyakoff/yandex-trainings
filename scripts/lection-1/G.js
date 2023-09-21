const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');

const [N, K, M] = fileContent.split(' ').map(el => Number(el));

let producedM = 0;

let producedK = 0;

let leftoversN = N;

if (M > K) {
  producedM = 0;
} else {
  while (leftoversN > 0) {
    leftoversN -= K;

    if (leftoversN >= 0) {
      producedK++;
    }

    if (producedK) {
      leftoversN += K % M;

      producedM += Math.floor(K / M);

      producedK--;
    }
  }
}

fs.writeFileSync('output.txt', String(producedM));
