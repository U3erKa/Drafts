'use strict';

runTest();

function stringStats(string: string) {
  let numOfChars = 0;
  let numOfNumbers = 0;
  let numOfSymbols = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].search('[A-Za-z]') !== -1) {
      numOfChars++;
    } else if (string[i].search('[0-9]') !== -1) {
      numOfNumbers++;
    } else {
      numOfSymbols++;
    }
  }

  return {
    numOfChars,
    numOfNumbers,
    numOfSymbols,
  };
}

function numToText(number: string | number) {
  number += '';
  let result = '';

  // @ts-expect-error
  if (number[0] !== '1') {
    // @ts-expect-error
    switch (number[0]) {
      case '2': {
        result += 'twenty ';
        break;
      }
      case '3': {
        result += 'thirty ';
        break;
      }
      case '4': {
        result += 'forty ';
        break;
      }
      case '5': {
        result += 'fifty ';
        break;
      }
      case '6': {
        result += 'sixty ';
        break;
      }
      case '7': {
        result += 'seventy ';
        break;
      }
      case '8': {
        result += 'eighty ';
        break;
      }
      case '9': {
        result += 'ninty ';
        break;
      }

      default: {
        result += 'NaN ';
        break;
      }
    }
    // @ts-expect-error
    switch (number[1]) {
      case '1': {
        result += 'one';
        break;
      }
      case '2': {
        result += 'two';
        break;
      }
      case '3': {
        result += 'three';
        break;
      }
      case '4': {
        result += 'four';
        break;
      }
      case '5': {
        result += 'five';
        break;
      }
      case '6': {
        result += 'six';
        break;
      }
      case '7': {
        result += 'seven';
        break;
      }
      case '8': {
        result += 'eight';
        break;
      }
      case '9': {
        result += 'nine';
        break;
      }

      default: {
        result += 'NaN';
        break;
      }
    }
  } else {
    // @ts-expect-error
    switch (number[1]) {
      case '0': {
        result += 'ten';
        break;
      }
      case '1': {
        result += 'eleven';
        break;
      }
      case '2': {
        result += 'tvelve';
        break;
      }
      case '3': {
        result += 'thirteen';
        break;
      }
      case '4': {
        result += 'fourteen';
        break;
      }
      case '5': {
        result += 'fifteen';
        break;
      }
      case '6': {
        result += 'sixteen';
        break;
      }
      case '7': {
        result += 'seventeen';
        break;
      }
      case '8': {
        result += 'eighteen';
        break;
      }
      case '9': {
        result += 'nineteen';
        break;
      }
      default: {
        result += 'NaN';
        break;
      }
    }
  }
  return result.trim();
}

function invertCase(string: string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i].search('[A-Z]') !== -1) {
      result += string[i].toLowerCase();
    } else if (string[i].search('[a-z]') !== -1) {
      result += string[i].toUpperCase();
    } else if (string[i].search('[0-9]') !== -1) {
      result += '_';
    } else {
      result += string[i];
    }
  }

  return result;
}

function cssStylesToCamelCase(styleName: string) {
  const words = styleName.split('-');
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i].split('');
    word[0] = word[0].toUpperCase();
    result += word.join('');
  }

  return result;
}
/*
function cssStylesToCamelCase(styleName: string) {
  let result = styleName.split('');
  const dashAt = styleName.search('-');

  if (dashAt !== -1) {
    delete result[dashAt];
    result[dashAt + 1] = result[dashAt + 1].toUpperCase();
  } else {
    return styleName;
  }

  return cssStylesToCamelCase(result.join(''));
}
*/

function phraseToAbbreviation(phrase: string) {
  const words = phrase.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split('');
    result += letters[0].toUpperCase();
  }

  return result;
}

function isPalindrom(phrase: string) {
  phrase = phrase.split(' ').join('');
  for (let i = 0; i < phrase.length / 2; i++) {
    if (
      phrase[i].toLowerCase() !== phrase[phrase.length - i - 1].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
}

function calculator(equation: string) {
  const [a, operator, b] = equation.split(' ');

  switch (operator) {
    case '+': {
      return +a + +b;
    }
    case '-': {
      return +a - +b;
    }
    case '*': {
      return +a * +b;
    }
    case '/': {
      return +a / +b;
    }

    default:
      return NaN;
  }
}

function lolEmoji(string: string) {
  const result = string.split(' ');
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'lol') {
      result[i] = ':)';
    }
  }
  return result.join(' ');
}

function splitString(string: string, splitter: string = '/') {
  const result = [];
  let currentPos = 0;
  let i = 0;
  string = `${string}${splitter}`;

  while (string.indexOf(splitter) !== -1) {
    const splitterPos = string.indexOf(splitter);

    result[i++] = string.slice(currentPos, splitterPos);
    string = string.replace('/', '');
    currentPos = splitterPos;
  }

  return result;
  // return string.split(splitter);
}

function runTest() {
  console.log(stringStats('2345 a string'));
  console.log(numToText(25));
  console.log(numToText(12));
  console.log(numToText(49));
  console.log(invertCase('quakePRO 2345 %'));
  console.log(cssStylesToCamelCase('font-size'));
  console.log(cssStylesToCamelCase('text-content-width-yare-yare'));
  console.log(phraseToAbbreviation('object oriented programming'));
  console.log(isPalindrom('шалаш'));
  console.log(isPalindrom('шаурма'));
  console.log(isPalindrom('O wwo'));
  console.log(calculator('50 + 5'));
  console.log(calculator('50 - 5'));
  console.log(calculator('50 * 5'));
  console.log(calculator('50 / 5'));
  console.log(lolEmoji('lol lol alol lol'));
  console.log(splitString('21/05/2023'));
}

export {
  stringStats,
  numToText,
  invertCase,
  cssStylesToCamelCase,
  phraseToAbbreviation,
  isPalindrom,
  calculator,
  lolEmoji,
  splitString,
};
