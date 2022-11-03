const data = require('./MyMath.js'); // 'use strict' enables
// import { add } from './MyMath.js';
// import 'MyMath.js';
const fs = require('node:fs/promises');

fs.readFile('./file.txt', { encoding: 'utf8' }).then(console.log);

// console.log(data.add(1, 2, 3, 4, 5));
// console.log(MyMath.div(1000, 2, 4, 5));
// console.log(data.MyMath.div(1000, 2, 4, 5));
// console.log(divideNums(100, 2, 5));

function divideNums(...numbers) {
  return numbers.reduce((acc, num) => acc / num);
}
