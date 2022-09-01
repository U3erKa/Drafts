const calculator9001 = function (a, b) {
  const action = prompt('Choose how to calculate two numbers:\n+, -, *, /');

  switch (action) {
    case '+': {
      return a + b;
    }
    case '-': {
      return a - b;
    }
    case '*': {
      return a * b;
    }
    case '/': {
      return a / b;
    }
    default: {
      console.log('Umm... Did you choose correct action?');
    }
  }
};
