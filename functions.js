// functional expression
const input1 = prompt('Enter 1st number');
const input2 = prompt('Enter 2nd number');

const getSumOfTwo = function (num1, num2) {
  const result = +num1 + Number(num2);

  return result;
  // const message = num1 + ' + ' + num2 + ' = ' + result;

  // alert(num1 + ' + ' + num2 + ' = ' + (+num1 + +num2));
  // console.log(message);
};

const result = getSumOfTwo(input1, input2);
console.log(result);

/*
const data = console.log(123); //returns undefined despite that it works
*/

// const name = prompt('Hewwo wowld!'); // returns string you type in prompt
// const greetingMessage = 'Hello, ' + name;

// console.log('Hello,', name);
// alert('Hello, ' + name);
// alert(greetingMessage);

// functional declaration

//arrow function
