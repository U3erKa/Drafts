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
console.log(`${symbol1.description}: ${obj[symbol1]}`)