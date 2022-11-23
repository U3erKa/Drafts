const x = 10;
const y = 20;
const value = '0x500';
const expression = 300 / 5 + 27 * -3 + 21;
let num = 10;

console.log('calculations');
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(+value);
console.log(!!expression);

console.log('changes os num');
num += 5;
console.log(num);
num /= 3;
console.log(num);
num *= 50;
console.log(num);
num -= 15;
console.log(num);

export {};
