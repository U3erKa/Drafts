const userEmails = {
  0: 'email1@example.com',
  1: 'email2@example.com',
  2: 'email3@example.com',
  3: 'email4@example.com',
  4: 'email5@example.com',
};

const userEmailsArray = new Array(
  'email1@example.com',
  'email2@example.com',
  'email3@example.com',
  'email4@example.com',
  'email5@example.com',
);

const arr = [
  'email1@example.com',
  'email2@example.com',
  'email3@example.com',
  'email4@example.com',
  'email5@example.com',
];

const emptyArr = [];
const arr1 = [userEmails, true, 1488, 'Hmm...'];

console.log(userEmailsArray[4]);
console.log(arr[0]);
arr[arr.length] = 'Loremium';
arr.push('Loremium', 'Ipsumium'); // can add more than one value into array, returns arr.length
arr1[5] = 'Crud.'; // bad idea

const userNames = ['User', 'Loremium', 'Ipsumium', 'Copium', 'Gee'];
userNames.push('Vik', 'U3erKa');
let newArrayLengthPush = userNames.push('Anonimus');
const lastDeletedFromEnd = userNames.pop();
let newArrayLengthUnshift = userNames.unshift('Billy'); // adds value to array beginning
userNames.unshift('John', 'Olya');
const lastDeletedFromStart = userNames.shift();
const splisedEntries = userNames.splice(3, 2, 'Bepis');
const arr2 = [
  ['arrgh1', 'arrgh2', 'arrgh3'],
  ['arrgh4', 'arrgh5', 'arrgh6'],
  ['arrgh7', 'arrgh8', 'arrgh9'],
];
console.log(arr2[1][2]);

userNames.push(['arrgh1', 'arrgh2', 'arrgh3']);
const surfaceCopy = userNames.slice();
// surface copy, inside array is the same
console.log(userNames[8] === surfaceCopy[8]); // true, badness... maybe

const surfaceCopyPart1 = userNames.slice(1, -2);
const surfaceCopyPart2 = userNames.slice(1, 4); // copies [1, 4)
const surfaceCopyPart3 = userNames.slice(4);

console.log("userNames.includes('Vik') " + userNames.includes('Vik'));
console.log("userNames.includes('U2erKa') " + userNames.includes('U2erKa'));
console.log(
  "userNames.includes(['arrgh1', 'arrgh2', 'arrgh3'] " +
    userNames.includes(['arrgh1', 'arrgh2', 'arrgh3']),
); // false, though the object (array) exists

console.log("userNames.indexOf('Vik') " + userNames.indexOf('Vik'));
console.log("userNames.indexOf('Vik',6) " + userNames.indexOf('Vik', 6));
console.log("userNames.indexOf('Vik',7) " + userNames.indexOf('Vik', 7));
console.log("userNames.indexOf('U2erKa') " + userNames.indexOf('U2erKa'));

// array [1,2,3,4,5] becomes numbers, but not [[1, 2, 3, 4, 5]]
const concatedArray = userNames.concat(
  undefined,
  'Larry',
  [1, 2, 3, 4, 5],
  [[1, 2, 3, 4, 5]],
);
console.log(userNames[8] === concatedArray[8]); // true, badness... maybe
const flatArr2 = arr2.flat(1);
const flatArr3 = arr2.flat(Infinity);
const joinedArr2 = arr2.join(' or ');

const numbersArray1 = [
  1, 2, 3, 4, 5, 6, 12, 13, 10, 11, 17, 14, 15, 16, 7, 8, 9, 18, 19, 20,
];
numbersArray1.sort();

const sortFunc = function (currentValue, nextValue) {
  // if (currentValue < nextValue) {
  //   return -1;
  // }
  return currentValue - nextValue;
  // return -1 - move left
  // return 0 - don't move
  // return 1 - move right
};

const sorted = numbersArray1.sort(sortFunc);

const callback = function (currentElement, index, arr) {
  console.log(`value: ${currentElement}`);
  console.log(`index: ${index}`);
  console.log(`array: ${arr}`);
  // console.log(arr)
};
userNames.forEach(callback);

const numbersArray2 = [
  1, 2, 3, 4, 5, 6, 12, 13, 10, 11, 17, 14, 15, 16, 7, 8, 9, 18, 19, 20,
];

const newNumbers = numbersArray2.map(function (currentElement, index, arr) {
  // return currentElement * 2;
  return currentElement; // copy array, newNumbers === numbersArray2 is false
});

const onlyUserNames = userNames.filter(function (elem, index, arr) {
  return typeof elem === 'string';
  // if (typeof elem === 'string') {
  //   return true;
  // }
  // return false;
});

const bestNameEver = onlyUserNames.find(function (elem, index, arr) {
  return elem === 'Vik';
});

const foundValue = numbersArray2.find(function (elem, index, arr) {
  return elem < 10 && elem > 3;
});

const isThereVik = onlyUserNames.some(function (elem) {
  return elem === 'Vik';
});

const isEveryoneVik = onlyUserNames.every(function (elem) {
  return elem === 'Vik';
});

const otherArr = [{ data: 1 }, { data: 2 }, { data: 3 }];
const newArr2 = otherArr.map(function (elem, i) {
  // const newObject = {
  //   data: elem.data,
  //   telephoneNumber: 911 + i,
  // }
  const newObject = structuredClone(elem);
  newObject.telephoneNumber = 911 + i;
  return newObject;
});

// HOF
const highOrderFunction1 = function (func) {
  secret = 'Hrrn... What are you looking for?!';
  func(secret);
};

highOrderFunction1(console.log);

const highOrderFunction2 = function () {
  console.log(';');
  return function () {
    console.log("function's inside log");
  };
};

const innerFunction = highOrderFunction2();
innerFunction();

const arr = new Array(25)
  .fill(undefined)
  .map(() => Math.floor((Math.random() - 0.25) * 10));