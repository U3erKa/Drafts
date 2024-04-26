function reverseString(str: string) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    result += letter;
  }
  return result;
}

reverseString('hello');

function factorialize(num: number): number {
  if (num <= 1) {
    return 1;
  }
  return factorialize(num - 1) * num;
}

factorialize(5);

function findLongestWordLength(str: string) {
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

function largestOfFour(arr: number[][]) {
  const result: number[] = [];

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

function confirmEnding(str: string, target: string) {
  return str.lastIndexOf(target) === str.length - target.length;
}

confirmEnding('Bastian', 'n');

function repeatStringNumTimes(str: string, num: number) {
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

function truncateString(str: string, num: number) {
  const truncatedString = str.slice(0, num);
  return truncatedString.length < str.length ? `${truncatedString}...` : truncatedString;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

/**
 * @template Element
 * @param {Element[]} arr
 * @param {(arg0: Element) => boolean} func
 * @returns {Element | undefined}
 */
function findElement<Element>(arr: Element[], func: (arg0: Element) => boolean): Element | undefined {
  const filtered = arr.filter(func);
  return filtered[0];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

/**
 * @param {any} bool
 * @returns {bool is boolean}
 */
function booWho(bool: unknown): bool is boolean {
  return typeof bool === 'boolean';
}

booWho(null);

function titleCase(str: string) {
  const words = str.toLowerCase().split(' ');
  const result: string[] = [];

  for (const word of words) {
    const letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    result.push(letters.join(''));
  }

  return result.join(' ');
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1: unknown[], arr2: unknown[], n: number) {
  const result = arr2.slice();
  result.splice(n, 0, ...arr1);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr: unknown[]) {
  const result = arr.filter((item) => !!item);
  return result;
}

bouncer([7, 'ate', '', false, 9]);

function getIndexToIns(arr: number[], num: number) {
  const sortedArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    const element: (typeof sortedArr)[number] = sortedArr[i];
    if (element >= num) {
      return i;
    }
  }
  return sortedArr.length;
}

getIndexToIns([40, 60], 50);

function mutation(arr: string[]) {
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

function chunkArrayInGroups<T>(arr: T[], size: number) {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    const slice = arr.slice(i, i + size);
    result.push(slice);
  }
  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

let _uniqueIdNum = 0;
/** Generates a unique ID. If `prefix` is given, the ID is appended to it */
function uniqueId(prefix: unknown) {
  return `${prefix?.toString() ?? ''}${++_uniqueIdNum}`;
}
