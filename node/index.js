// @ts-check
// CommonJS
// const data = require('./MyMath.js'); // 'use strict' enables
// const fs = require('node:fs/promises');
// const _ = require('lodash');

// ESModules
// import MyMath from './MyMath.js';
import { sum, number as num } from './MyMath.js';
// import * as MyMathModule from './MyMath.js';

// const number = _.random(-100, 100, false);
// console.log(number);

// fs.readFile('./file.txt', { encoding: 'utf8' }).then(console.log);

// function appendStringToFile(string) {
//   fs.appendFile('./file.txt', `${string}\n`);

//   // fs.readFile('./file.txt', { encoding: 'utf8' }).then((text) =>
//   //   fs.writeFile('./file.txt', `${text}${string}\n`)
//   // );
// }

// appendStringToFile('loremium');

// console.log(MyMathModule.sum(MyMathModule.number, 2, 3, 4, 5));
console.log(sum(num, 2, 3, 4, 5));
// console.log(data.add(1, 2, 3, 4, 5));
// console.log(MyMath.div(1000, 2, 4, 5));
// console.log(data.MyMath.div(1000, 2, 4, 5));
// console.log(divideNums(100, 2, 5));

function divideNums(...numbers) {
  return numbers.reduce((acc, num) => acc / num);
}
