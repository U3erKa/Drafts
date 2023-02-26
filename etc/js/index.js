function reverseString(/** @type {string} */ str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    result += letter;
  }
  return result;
}

reverseString('hello');

function factorialize(/** @type {number} */ num) {
  if (num <= 1) {
    return 1;
  }
  return factorialize(num - 1) * num;
}

factorialize(5);

function findLongestWordLength(/** @type {string} */ str) {
  const words = str.split(' ');
  let wordLength = 0;
  for (const word of words) {
    if (wordLength < word.length) {
      wordLength = word.length;
    }
  }

  return wordLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

function largestOfFour(/** @type {number[][]} */ arr) {
  const result = [];

  for (const subarray of arr) {
    subarray.sort((a, b) => b - a);
    result.push(subarray[0]);
  }

  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

function confirmEnding(/** @type {string} */ str, /** @type {string} */ target) {
  return str.lastIndexOf(target) === str.length - target.length;
}

confirmEnding('Bastian', 'n');

function repeatStringNumTimes(/** @type {string} */ str, /** @type {number} */ num) {
  if (num <= 0) {
    return '';
  }

  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes('abc', 3);

function truncateString(/** @type {string} */ str, /** @type {number} */ num) {
  const truncatedString = str.slice(0, num);
  return truncatedString.length < str.length ? `${truncatedString}...` : truncatedString;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

function findElement(/** @type {unknown[]} */ arr, /** @type {(arg0: unknown) => boolean} */ func) {
  const filtered = arr.filter(func);
  return filtered[0];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

function titleCase(/** @type {string} */ str) {
  const words = str.toLowerCase().split(' ');
  let result = [];

  for (const word of words) {
    const letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    result.push(letters.join(''));
  }

  return result.join(' ');
}

titleCase("I'm a little tea pot");

function frankenSplice(
  /** @type {unknown[]} */ arr1,
  /** @type {unknown[]} */ arr2,
  /** @type {number} */ n
) {
  const result = arr2.slice();
  result.splice(n, 0, ...arr1);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(/** @type {unknown[]} */ arr) {
  const result = arr.filter((item) => !!item);
  return result;
}

bouncer([7, 'ate', '', false, 9]);

function getIndexToIns(/** @type {number[]} */ arr, /** @type {number} */ num) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    const element = sortedArr[i];
    if (element >= num) {
      return i;
    }
  }
  return sortedArr.length;
}

getIndexToIns([40, 60], 50);

function mutation(/** @type {string[]} */ arr) {
  const [_string, _includedLetters] = arr;
  const string = _string.toLowerCase();
  const includedLetters = _includedLetters.toLowerCase();

  for (let i = 0; i < includedLetters.length; i++) {
    const letter = includedLetters[i];
    if (!string.includes(letter)) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);

function chunkArrayInGroups(/** @type {unknown[]} */ arr, /** @type {number} */ size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const slice = arr.slice(i, i + size);
    result.push(slice);
  }
  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
