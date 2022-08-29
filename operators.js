const result = 2 + 2 * 2;
let num = 5;
let num2 = 10;
let negativeNum = -9;
let verdict = true;

// some possible operations + - * / % **

console.log("Result:", result);
// console.log(num);
// num++;
// console.log(num);
// ++num;
// console.log(num);
console.log("increments start");
console.log(++num);
console.log(num++);
console.log(num);

// num2 = num2 + 5;
num2 += 5;
console.log(+"10");
console.log(num2);
console.log(-negativeNum);
console.log("hmm...");
console.log(0.1 + 0.2);
console.log((0.1 / 100 + 0.2 / 100) * 100);

console.log(!verdict);
console.log(!!verdict); // true if verdict != 0
console.log(Boolean(verdict));
