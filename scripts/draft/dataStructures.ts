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

const map = new Map();
map.set('key', 'value');
map.set([], {});
map.set('123', '234');
map.set(123, 234);
map.set(function log() {
  console.log(true);
}, 123);
// map.clear();
map.delete('123');

const get1 = map.get(123);
const get2 = map.get('key');
const has1 = map.has(123);
const has2 = map.has(2344);

const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ['key4', 'value4'],
  ['key5', 'value5'],
]);

const myVocabulary = new Map([
  ['uk', 'en'],
  ['паляниця', 'loaf'],
  ['кіт', 'cat'],
  ['весна', 'spring'],
  ['літо', 'summer'],
  ['осінь', 'autumn'],
  ['зима', 'winter'],
  ['розробник', 'developer'],
]);

const testString = 'розробник зима паляниця кіт весна осінь літо uk typo';

/*
function translate(stringToTranslate, vocabulary = vocabulary) {
  const words = stringToTranslate.toLowerCase().split(' ');
  let translation = '';
  for (const word of words) {
    if (vocabulary.has(word)) {
      translation += `${vocabulary.get(word)} `;
    } else {
      translation += `${word} `; 
    }
  }
  return translation.trim()
}
*/
const translate = (stringToTranslate: string, vocabulary = myVocabulary) =>
  stringToTranslate
    .toLowerCase()
    .split(' ')
    .map((word: string) => (vocabulary.has(word) ? vocabulary.get(word) : word))
    .join(' ');

const user1 = {
  id: 1,
  name: 'Test test',
};

const user2 = {
  id: 2,
  name: 'Null Null',
};

const messages1 = ['hi!', 'good', 'bye!'];
const messages2 = ['hello', 'how are you?', 'bye!'];

const map3 = new Map([
  [user1, messages1],
  [user2, messages2],
]);

const getMessages = (user: { id: number; name: string }) => map3.get(user);

// map3.forEach((value, key, map) => {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// });
// for (const key of map3.keys()) {
//   console.log(key);
// }
// for (const value of map3.values()) {
//   console.log(value);
// }
// for (const entries of map3.entries()) {
//   console.log(entries);
// }
// for (const entries of map3) {
//   console.log(entries);
// }
const newMap3 = new Map([...map3]);
const userKeys = Object.keys(user1);
const userValues = Object.values(user1);
const userEntries = Object.entries(user1);
const userMap = new Map(userEntries);

export {};
