'use strict';

function checkAge(age: number) {
  if (age < 0) {
    throw new RangeError('Incorrect age');
  }
  if (age <= 2) {
    return 'baby';
  } else if (age <= 11) {
    return 'kid';
  } else if (age <= 18) {
    return 'teenager';
  } else if (age <= 60) {
    return 'adult';
  } else {
    return 'pensioner';
  }
}

function specialCharAtKey(charCode: number) {
  switch (charCode) {
    case 1: {
      return '!';
    }
    case 2: {
      return '@';
    }
    case 3: {
      return '#';
    }
    case 4: {
      return '$';
    }
    case 5: {
      return '%';
    }
    case 6: {
      return '^';
    }
    case 7: {
      return '&';
    }
    case 8: {
      return '*';
    }
    case 9: {
      return '(';
    }
    case 0: {
      return ')';
    }
    default: {
      throw new TypeError('Wrong key');
    }
  }
}

function hasRepeatingNums(number: string) {
  number += '';
  return (
    number[0] === number[1] ||
    number[0] === number[2] ||
    number[1] === number[2]
  );
}

function isIntercalary(year: number) {
  return !(year % 400 || (!(year % 100) && year % 4));
}

export { checkAge, specialCharAtKey, hasRepeatingNums, isIntercalary };
