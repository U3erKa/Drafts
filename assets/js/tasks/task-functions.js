const input1 = prompt('Enter 1st number');
const input2 = prompt('Enter 2nd number');

const isFirstNumberBigger = function (num1, num2) {
  const result = +num1 > +num2;
  return result;
};

const result = isFirstNumberBigger(input1, input2);
console.log('Is ' + input1 + ' > ' + input2 + '? ' + result);
