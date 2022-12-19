const calculator9001 = function (a: number, b: number, action: string) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a - b)) {
    return null;
  }

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

export { calculator9001 };
