const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
const arr5 = ['js', 'css', 'jq'];
const arr6 = ['js', 'css', 'jq'];
const arr7 = [1, 2, 3, 4, 5];
const arr8 = [1, 2, 3, 4, 5];
const arr9 = [1, 2, 3, 4, '5'];
const arr10 = [1, 2, 3, 4, '5'];
const arr11 = [3, 4, 1, 2, 7];
const arr12 = [
  { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
];
const arr13 = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefinovich', age: 99 },
  { firstName: 'Null', lastName: 'Nullovich', gender: 'male' },
];
const arr14 = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]];

const concatArr = arr1.concat(arr2);
const reverseArr = arr1.reverse();

const pushArrLength = arr3.push(4, 5, 6);
const unshiftArrLength = arr4.unshift(4, 5, 6);

console.log(`Used arr5.shift(), returned element: ${arr5.shift()}`);
console.log(`Used arr6.pop(), returned element: ${arr6.pop()}`);

const slice1 = arr7.slice(0, 3);
const slice2 = arr7.slice(-2);

arr7.splice(1, 2);
console.log(`Used arr7.splice(1, 2), arr7 is shown below:`);
console.log(arr7);

const splice2 = arr8.splice(1, 3);
console.log(`Used arr8.splice(1, 3), returned array (splice2) is shown below:`);
console.log(splice2);

arr9.splice(3, 0, 'a', 'b', 'c');
console.log(`Used arr9.splice(3, 0, 'a', 'b', 'c'), arr9 is shown below:`);
console.log(arr9);

arr10.splice(1, 0, 'a', 'b');
arr10.splice(-1, 0, 'c');
arr10.splice(arr10.length, 0, 'e');
console.log(`Used arr9.splice(3, 0, 'a', 'b', 'c'), arr9 is shown below:`);
console.log(arr10);

arr11.sort(function (a, b) {
  return a - b;
});

arr12.forEach(function (user) {
  console.log(`User ${user.firstName} ${user.lastName} is ${user.gender} and ${user.age} years old`);
});

const mapArr = arr12.map(function (currentElement, index) {
  const newObject = structuredClone(currentElement);

  switch (index) {
    case 0: {
      // @ts-expect-error
      newObject.telephoneNumber = 911;
      break;
    }
    case 1: {
      // @ts-expect-error
      newObject.telephoneNumber = 912;
      break;
    }
    case 2: {
      // @ts-expect-error
      newObject.telephoneNumber = 913;
      break;
    }
    case 3: {
      // @ts-expect-error
      newObject.telephoneNumber = 914;
      break;
    }
    default: {
      break;
    }
  }
  return newObject;
});
console.log(arr12);
console.log(mapArr);

const filterArr = arr13.filter(function (currentElement) {
  // @ts-expect-error
  return currentElement.age >= 18 && currentElement.gender !== undefined;
});

const flatArr = arr14.flat(Infinity);

export {};
