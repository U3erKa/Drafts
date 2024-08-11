const symbol1 = Symbol('');

const obj = {
  [Symbol('symbol for u5er')]: 'u5er',
  test: 'test',
  isObj: true,
};

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

const symbols = Object.getOwnPropertySymbols(obj);
const symbol2 = symbols[0];
console.log(`${symbol2.description}: ${obj[symbol2]}`);

const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();
const phones = [145624567435, 3453464574567, 34545772456, 356724565452635, 23456345674526];
const str3 = '12qasdsdfgwedf';

for (const iterator of phones) {
  console.log(iterator);
}
for (const iterator of str3) {
  console.log(iterator);
}

export {};
