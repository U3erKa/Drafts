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
const getSumOfTwo = function (num1: number | string, num2: number | string) {
  const result = +num1 + Number(num2);
  return result;
  // const message = num1 + ' + ' + num2 + ' = ' + result;

  // alert(num1 + ' + ' + num2 + ' = ' + (+num1 + +num2));
  // console.log(message);
};

// declaration
function getSumOfTwo2(num1: number | string, num2: number | string) {
  // this.alert = 10; // can break Window.alert >:)
  return +num1 + Number(num2);
}

// const test123 = new getSumOfTwo2(); // not a constructor
const result = getSumOfTwo(input1, input2);
// console.log(result);

// arrow function
const getSumOfTwo3 = (num1: number, num2: number) => num1 + num2;
const square = (n: number) => n * n;
const windowFunc = () => this;

type Article = {
  name: string;
  author: string;
  text: string;
};

const newspaper = {
  name: 'Show Time',
  articles: [
    { name: 'blah1', text: 'weather today', author: 'me' },
    { name: 'blah2', text: 'weather tomorrow', author: 'a-me' },
    { name: 'blah3', text: 'weather undefined', author: 'not-a me' },
  ] as Article[],

  showArticles: function () {
    this.articles.forEach((article: Article) => {
      console.log(`Newspaper ${this.name} Article: ${article.name} Author ${article.author} Text ${article.text}`);
    });
  },
  // showArticles1: function () {
  //   const that = this;
  //   this.articles.forEach(function callback(article: Article) {
  //     console.log(`Newspaper ${that.name} Article: ${article.name} Author ${article.author} Text ${article.text}`);
  //   });
  // },
  // showArticles2: function () {
  //   const callback = function (article: Article) {
  //     console.log(`Newspaper ${this.name} Article: ${article.name} Author ${article.author} Text ${article.text}`);
  //   };
  //   this.articles.forEach(callback.bind(this));
  // },
};

const testObj1 = () => {}; // undefined
const testObj2 = () => ({}); // object
const betterSum = (numbers: number[]) => numbers.reduce((sum, number) => sum + number);

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
function sum2(num1: number, num2: number) {
  sideEffect++;
  // console.log('console.log() is also a side effect');
  return num1 + num2;
}
// worst kind of bad badness
function sum3(num1: number, num2: number) {
  sideEffect++;
  // console.log('console.log() is also a side effect');
  return num1 + num2 + sideEffect + Math.random();
}

type UserConstructor = new (
  firstName: string,
  lastName: string,
  email: string,
  age?: number,
  isLoggedIn?: boolean,
) => void;

const User = function (this: any, firstName = '', lastName = '', email: string, age = 0, isLoggedIn = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
} as unknown as UserConstructor;

const users = [
  new User('U1erKa', 'U1', 'email1@example.com', 18),
  // @ts-expect-error
  new User('U2erKa', 'U2', 'email2@example.com', 19, 'boo'),
  new User('U3erKa', 'U3', 'email3@example.com', 20, true),
  new User('U4erKa', 'U4', 'email4@example.com', 21),
  new User('U5erKa', 'U5', 'email5@example.com', 22),
];

const DISALLOWED_WORDS = ['', '+', '-', '*', '/'];
function filter(string: string) {
  return string.split(' ').filter((word: string) => !DISALLOWED_WORDS.includes(word));
}

const biggestWord = (string: string) =>
  string.split(' ').reduce((a: string, b: string) => (b.length > a.length ? b : a)).length;

const lengthOfBiggestWord = (string: string) => {
  let longestWord = '';
  const words = string.trim().split(' ');
  words.forEach((word: string) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord.length;
};

// ...numbers - rest operator
function substract(...numbers: number[]) {
  return numbers.reduce((res, currentnumber) => res - currentnumber);
}
function substract1(...numbers: number[]) {
  let result = numbers[0] * 2;
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
}
function substract2(...numbers: number[]) {
  let result = numbers[0] * 2;
  numbers.forEach((number, i) => {
    result -= number;
  });
  return result;
}

const res2 = substract(600, 52, 23, 43, 66, 6);

const arr = [1, 3, 5, 7, 9];
// console.log(substract(...arr)); //spread operator
const maleName = ['Vik', 'Viktor', 'U2erKa'];
const femaleName = ['Viktoria', 'Viki', 'V'];
const names = [...maleName, ...'Monsier', ...femaleName];
const user = {
  firstName: 'Test',
  age: 80, // CRUD
  // @ts-expect-error
  age: 8,
};
const fullUser = {
  lastName: 'Testov',
  ...user,
  // firstName: user.firstName,
  // age: user.age,
};

function someFunc(options: object) {
  const defaultOptions = {
    amount: 10,
    data1: 'test',
  };
  const finalOptions = {
    ...defaultOptions,
    ...options,
    ...fullUser,
  };
  return finalOptions;
}
// console.log(someFunc({ data2: false, data3: true }));

function recursive() {
  // console.log(';');
  recursive();
}

function countdown(number: number) {
  console.log(number);
  if (number > 0 && number <= 11390) {
    countdown(number - 1);
  }
  // console.log('GO!')
  return 'GO!';
}

function customCountdown(number1: number, number2: number) {
  if (number1 > number2) {
    console.log(number1--);
    customCountdown(number1, number2);
  } else if (number1 < number2) {
    console.log(number2--);
    customCountdown(number1, number2);
  } else {
    console.log(number1);
  }
  return 'GO!';
}

function logRange(...numbers: number[]) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  console.log(min);
  if (min < max) {
    logRange(min + 1, max);
  }
}

function toPower(number: number, exp: number): number {
  if (exp === 1) {
    return number;
  } else if (exp === 0) {
    return 1;
  }
  return exp > 0 ? number * toPower(number, exp - 1) : 1 / (number * toPower(number, Math.abs(exp) - 1));
}

type Tree = { value: number; left?: Tree; right?: Tree };

const tree: Tree = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
    },
    right: {
      value: 6,
      left: {
        value: 4,
      },
      right: {
        value: 7,
      },
    },
  },
  right: {
    value: 10,
    right: {
      value: 14,
      left: {
        value: 13,
      },
    },
  },
};

const easyTree: Tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
    },
  },
  right: {
    value: 4,
  },
};

function reduceTree(tree: Tree) {
  let result = tree.value;

  if (tree.left) {
    result += reduceTree(tree.left);
  }
  if (tree.right) {
    result += reduceTree(tree.right);
  }
  return result;
}

function factorial(number: number): number {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('parameter must be a number');
  } else if (number < 0 || !Number.isInteger(number)) {
    throw new RangeError('number must be positive integer');
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

try {
  // factorial(-10)
  // @ts-expect-error
  factorial('100');
} catch (error: any) {
  console.log(error);
  console.log(error.message);
  if (error instanceof TypeError) {
    console.log('try to enter number instead');
  } else if (error instanceof RangeError) {
    console.log('try to enter positive number');
  }
}

// Array(this.to - this.from + 1).fill().map((_, i) => this.from + i);

export {};
