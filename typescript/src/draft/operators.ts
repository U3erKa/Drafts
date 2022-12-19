const result = 2 + 2 * 2;
let num = 5;
let num2 = 10;
let negativeNum = -9;
let verdict = true;
let val = NaN;
const number = 100;
let t1 = 40,
  t2 = 30,
  t3 = 20,
  t4 = 10;
let x = 10;

// some possible operations + - * / % **

console.log('Result:', result);
// console.log(num);
// num++;
// console.log(num);
// ++num;
// console.log(num);
console.log('increments start');
console.log(++num);
console.log(num++);
console.log(num);

// num2 = num2 + 5;
num2 += 5;
console.log(+'10');
console.log(num2);
console.log(-negativeNum);
console.log('hmm...');
console.log(0.1 + 0.2);
console.log((0.1 / 100 + 0.2 / 100) * 100);

console.log(!verdict);
console.log(!!verdict); // true if verdict != 0
console.log(Boolean(verdict));

'text' > 'test'; // true, compares unicode numbers
// @ts-expect-error
'10' == 10; // true (do not use too often); in TS - always false
// @ts-expect-error
'10' === 10; // false

console.log('val === val');
console.log(val === val);
console.log(isNaN(val));

console.log('number range');
console.log(number > 20);
console.log(number < 50);
// @ts-expect-error
console.log(20 < number < 50); // true (wrong!)
console.log(number > 20 && number < 50);

// && - first false, last true
// || - first true, last false

console.log('typeof <sth>');
console.log(typeof num);
console.log(typeof 'text');
console.log(typeof null);

// console.log(2 * 2, 100, 3 / 4);

export {};
