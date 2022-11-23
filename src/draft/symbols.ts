// const symbol1 = Symbol('symbol for u5er');
const symbol2 = Symbol('');

const obj = {
  [Symbol('symbol for u5er')]: 'u5er',
  test: 'test',
  isObj: true,
};

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

const symbols = Object.getOwnPropertySymbols(obj);
const symbol1 = symbols[0];
console.log(`${symbol1.description}: ${obj[symbol1]}`);

const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();
const phones = [145624567435, 3453464574567, 34545772456, 356724565452635, 23456345674526];
const str3 = '12qasdsdfgwedf';

// for (const iterator of phones) {
//   console.log(iterator);
// }
// for (const iterator of str3) {
//   console.log(iterator);
// }

function product(...array: number[]) {
  let result = 1;
  for (const number of array) {
    result *= number;
  }
  return result;
}

function division(...array: number[]) {
  let result = Math.pow(array[0], 2);
  for (const number of array) {
    result /= number;
  }
  return result;
}

export {};
