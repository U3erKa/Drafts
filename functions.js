const data = console.log(123); //returns undefined despite that it works
const num1 = prompt('Enter 1st number');
const num2 = prompt('Enter 2nd number');
const result = +num1 + Number(num2);
const message = num1 + ' + ' + num2 + ' = ' + result;

alert(num1 + ' + ' + num2 + ' = ' + (+num1 + +num2));
console.log(result);
console.log(message);

// const name = prompt('Hewwo wowld!'); // returns string you type in prompt
// const greetingMessage = 'Hello, ' + name;

// console.log('Hello,', name);
// alert('Hello, ' + name);
// alert(greetingMessage);