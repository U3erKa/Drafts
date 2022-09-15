'use strict';

// varrr = 10; // error if 'use strict'

// functional expression
// const input1 = prompt('Enter 1st number');
// const input2 = prompt('Enter 2nd number');
const input1 = 1;
const input2 = 3;

// console.log(getSumOfTwo(2, 5)); // breaks
// console.log(getSumOfTwo2(2, 5));

// expression
const getSumOfTwo = function (num1, num2) {
  const result = +num1 + Number(num2);
  return result;
  // const message = num1 + ' + ' + num2 + ' = ' + result;

  // alert(num1 + ' + ' + num2 + ' = ' + (+num1 + +num2));
  // console.log(message);
};

// declaration
function getSumOfTwo2(num1, num2) {
  // this.alert = 10; // can break Window.alert >:)
  return +num1 + Number(num2);
}

const test123 = new getSumOfTwo2();
const result = getSumOfTwo(input1, input2);
console.log(result);

// arrow function
const getSumOfTwo3 = (num1, num2) => num1 + num2;
const square = (n) => n * n;
const windowFunc = () => this;
const newspaper = {
  name: 'Show Time',
  articles: [
    { name: 'blah1', text: 'weather today', author: 'me' },
    { name: 'blah2', text: 'weather tomorrow', author: 'a-me' },
    { name: 'blah3', text: 'weather undefined', author: 'not-a me' },
  ],
  showArticles: function () {
    this.articles.forEach((article) => {
      console.log(
        `Newspaper ${this.name} Article: ${article.name} Author ${article.author} Text ${article.text}`
      );
    });
  },
  showArticles1: function () {
    const that = this;
    this.articles.forEach(function callback(article) {
      console.log(
        `Newspaper ${that.name} Article: ${article.name} Author ${article.author} Text ${article.text}`
      );
    });
  },
  showArticles2: function () {
    const callback = function (article) {
      console.log(
        `Newspaper ${this.name} Article: ${article.name} Author ${article.author} Text ${article.text}`
      );
    };
    this.articles.forEach(callback.bind(this));
  },
};

const testObj1 = () => {}; // undefined
const testObj2 = () => ({}); // object
const betterSum = (numbers) => numbers.reduce((sum, number) => sum + number);

// const betterSum = (numbers) => {
//   const sum = numbers.reduce((sum, number, index, array) => {
//     return sum + number;
//   });
//   return sum;
// };

const res1 = betterSum([1, 4, 6, 8, 4]);

/*
const data = console.log(123); //returns undefined despite that it works
*/

// const name = prompt('Hewwo wowld!'); // returns string you type in prompt
// const greetingMessage = 'Hello, ' + name;

// console.log('Hello,', name);
// alert('Hello, ' + name);
// alert(greetingMessage);

// determined function, result for the same input data is always the same
// without Math.random() or whatever
function sum1(num1 = 3, num2 = 5) {
  return num1 + num2;
}

// function with side effects (input, output)
let sideEffect = 1;
function sum2(num1, num2) {
  sideEffect++;
  // console.log('console.log() is also a side effect');
  return num1 + num2;
}
// worst kind of bad badness
function sum3(num1, num2) {
  sideEffect++;
  // console.log('console.log() is also a side effect');
  return num1 + num2 + sideEffect + Math.random();
}

const User = function (
  firstName = '',
  lastName = '',
  email,
  age = 0,
  isLoggedIn = false
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
};

const users = [
  new User('U1erKa', 'U1', 'email1@example.com', '18'),
  new User('U2erKa', 'U2', 'email2@example.com', '19', 'boo'),
  new User('U3erKa', 'U3', 'email3@example.com', '20', true),
  new User('U4erKa', 'U4', 'email4@example.com', '21'),
  new User('U5erKa', 'U5', 'email5@example.com', '22'),
];
