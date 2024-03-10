const employee = {
  name: 'Test',
  salary: 9001,
  monthsOfPayment: 4,
};
const error = new Error('Worst kind of bad badness');

function multiply(num1: number, num2: number) {
  if (
    typeof num1 === 'number' &&
    typeof num2 === 'number' &&
    !isNaN(num1 - num2)
  ) {
    return num1 * num2;
  }
  // throw "Tapok v User'a";
  // throw 404;
  // throw error;
  throw new TypeError('Expected two numbers');
}

try {
  const newPayment = multiply(employee.salary, employee.monthsOfPayment);
  console.log(`You received ${newPayment} $`);
} catch (err) {
  console.log(err);
  if (err instanceof TypeError) {
    console.log(error);
  } else if (err instanceof RangeError) {
    console.log(RangeError);
  }
} finally {
  console.log('Naughty!');
}

console.log('Hmm...');

export {};
