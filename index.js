/* 
alert(404);
alert('Boo');
alert("Hewwo wowld! UwU");
*/

// alert(`Ummm...`);

// hardcode
/*
console.log('Hewwo wowld! OwO'); // string
console.log(100); // number
console.log(100.4); // number
console.log(100n); // BigInt (big integer)
console.log(true); // boolean
console.log(false); // boolean
console.log(null); // null (empty value)
console.log(undefined); // undefined (no value)
console.log({value1: 123}); // object (data type: composite. can have various data types inside)
*/
/* 
var - obsolete, has bugs
let
const
*/

let myName; // set variable, can start with A-Z, a-z _ $, can include in the middle 0-9 as well
myName = 'Viktor'; // give it a value
// _ - lodash
// $ - JQuery

let string = 'Allo`'; // init variable

console.log(string);
console.log(myName);
// console.log('My name is ' + myName);
myName = 'already known to you';
console.log(string);
console.log(myName);
// console.log('My name is ' + myName);

let me = 'ME.'
const standPower = me;
let sitPower = me;
console.log(standPower);
console.log(sitPower);
// after an error JS stops script execution
// standPower = 'star';
// console.log(standPower);
me = 'not-a me';
sitPower = me;
console.log(standPower);
console.log(sitPower);
console.log (myName, ',', standPower, ',', me)
