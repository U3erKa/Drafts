const set1 = new Set();
const arr = [1, 3, 6, 7, 3, 6, 4, 6];
const set2 = new Set(arr);

set1.add(123);
set1.add(123); // can't add 2nd 123
set1.add('123');
set1.add([1, 3, 6, 7, 3, 6, 4, 6]);
set1.add([1, 3, 6, 7, 3, 6, 4, 6]);
set1.add(arr);
set1.add(set2);
// set1.clear(); // deletes everything in the set
set1.delete(123);
set1.delete([1, 3, 6, 7, 3, 6, 4, 6]); // doesn't work
set1.delete(arr);

// console.log(set1.has('123'));
// console.log(set1.has(12));

// set2.forEach((value, valueAgain, set) => {
//   console.log(value);
//   console.log(valueAgain);
//   console.log(set);
// });

// const setIterator = set2.values();
// console.log(setIterator.next());
// for (const item of setIterator) {
//   console.log(item);
// }
// const setKeys = set2.keys();
// console.log(setKeys.next());
// for (const item of setKeys) {
//   console.log(item);
// }
// const setEntries = set2.entries();
// console.log(setEntries.next());
// for (const item of setEntries) {
//   console.log(item);
// }
