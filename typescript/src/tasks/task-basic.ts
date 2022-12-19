'use strict';
const isAdult = function (age: number) {
  if (typeof age === 'number' && !isNaN(age) && age > 0) {
    return age >= 18;
  }
  return null;
};

const checkMultiplicity = function (num: number, mul: number) {
  if (typeof num === 'number' && !isNaN(num) && typeof mul === 'number' && !isNaN(mul) && mul !== 0) {
    return !(num % mul);
  }
  return null;
};

const isTrianglePossible = function (a: number, b: number, c: number) {
  if (
    typeof a === 'number' &&
    !isNaN(a) &&
    a > 0 &&
    typeof b === 'number' &&
    !isNaN(b) &&
    b > 0 &&
    typeof c === 'number' &&
    !isNaN(c) &&
    c > 0
  ) {
    return a + b > c && a + c > b && b + c > a;
  }
  return null;
};

const sumOfOdd = function (num: number) {
  if (typeof num === 'number' && !isNaN(num) && num > 0) {
    let currentOdd = 1;
    let result = 1;

    for (let i = 2; i < num; i += 2) {
      currentOdd += 2;
      result += currentOdd;
    }
    return result;
  }
  return null;
};

const isSimple = function (num: number) {
  if (typeof num === 'number' && !isNaN(num) && num > 1) {
    let verdict: boolean = false;
    for (let i = 2; i < num; i++) {
      if (num % i) {
        verdict = true;
      } else {
        verdict = false;
        return verdict;
      }
    }
    return verdict;
  }
  return null;
};

export { isAdult, checkMultiplicity, isTrianglePossible, sumOfOdd, isSimple };
