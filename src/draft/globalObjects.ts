// String
const str1 = 'loremium';
const charCode = str1.charCodeAt(0);
// str1[0] or str1.charAt(0)
// strings are immutable
const newStr1 = str1.concat('Ipsumius', 'DD');
const isInString = newStr1.includes('ius');
const firstCoincidence = newStr1.indexOf('ium');
const replaceStr1 = newStr1.replace('i', '80086');
// @ts-ignore
const replaceAllStr1 = newStr1.replaceAll('i', '80086');
const sliceStr = newStr1.slice(2, 6);
const subStr = newStr1.substring(1, 7);
const sliceStr2 = newStr1.slice(9, 3);
const subStr2 = newStr1.substring(9, 3);
const lowercase = newStr1.toLowerCase();
const uppercase = newStr1.toUpperCase();
const email = '         email@example.com  ';
const trimEmail = email.trim();
// const spacesStr = '    boo        ooooo   ooo  '
const preArrayStr = 'lorem ipsum dolor sit amet';
const words = preArrayStr.split(' ');
const postArrayStr = words.join('-');

function toJadenCase(str: string) {
  const words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word[0];
    const capitalizedWord = firstLetter.toUpperCase() + word.slice(1);
    result += capitalizedWord + ' ';
  }
  return result.trim();
}

// console.log(toJadenCase(preArrayStr));

// for (let i = 0; i < str1.length; i++) {
//   console.log(str1[i]);
// }

// Boolean
const boolResult = Boolean(firstCoincidence); // !!firstCoincidence

// Number
const num1 = Number('123332'); // +num1
const exp = num1.toExponential(2);
const absoluteNumber = Math.abs(-10);
const squareRoot = Math.sqrt(9);
const cubicRoot = Math.cbrt(27);
const mathRound1 = Math.round(3.4);
const mathRound2 = Math.round(3.5);
const mathCeil = Math.ceil(4.1);
const mathFloor = Math.floor(4.9);
const num2 = 0.1 + 0.2;
const toFixed = +num2.toFixed(1);
const mathMin = Math.min(1, 4, 7, 4, 55, -10, -123);
const mathMax = Math.max(1, 4, 7, 4, 55, -10, -123);
const mathPow1 = Math.pow(5, 3);
const mathPow2 = Math.pow(-5, 3);
const mathPow3 = Math.pow(-5, 2);
const mathRandom = Math.random();

function getRandomArbitrary(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export {};
