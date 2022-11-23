// const input = prompt('Enter your name below');

const greetingMessage = function (name: string) {
  const result = 'Hello ' + name;
  return result;
};

const greetMeMessage = greetingMessage('Vik');
console.log(greetMeMessage);
alert(greetingMessage('Viktor'));

export { greetingMessage };
