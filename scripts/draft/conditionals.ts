const friendName = 'Vik';
const bigBadBossGuy = 'Vik';
const bigShot = 'Viktor';
const notMe = 'U2erKa';
const input = prompt('Choose your skill:\n1 - Power\n2 - Health\n3 - Speed')!;

const getSumOfTwo = function (num1: number, num2: number) {
  // eslint-disable-next-line no-debugger
  debugger;
  if (typeof num1 === 'number' && typeof num2 === 'number' && !isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    return result;
  } else {
    return NaN;
  }
};

if (friendName === bigBadBossGuy) {
  console.log('It is pleasure to see you.');
} else if (friendName === bigShot) {
  console.log('Oh, hello there!');
} else if (friendName === notMe) {
  console.log("If it isn't " + notMe + '...');
} else {
  console.log('Hello. Do we know each other?');
}

switch (input) {
  // @ts-expect-error
  case 1:
  case '1': {
    console.log('You are strong');
    break;
  }
  // @ts-expect-error
  case 2:
  case '2': {
    console.log('You are vigorous');
    break;
  }
  // @ts-expect-error
  case 3:
  case '3': {
    console.log('You are fast');
    break;
  }
  default: {
    console.log("You didn't choose anything, did you.");
  }
}

// debugger;
if (+input > 5) {
  const replyText = 'Big Shot';
  console.log(replyText);
} else if (+input > 0) {
  const replyText = 'Try harder';
  console.log(replyText);
} else {
  const replyText = 'Meh...';
  console.log(replyText);
}

// var is ok in function() only; do not use
// var var1 = 'test';
// if (true) {
//   var var1 = 123123;
//   console.log(var1);
// }
// console.log(var1);

const userName = 'U3';
const isGreeting = true;

const message = isGreeting ? 'Hello ' + userName : 'Bye-bye ' + userName;

// Big Bad code
// too bad to use
// 10 > 0
//   ? console.log('Yess')
//   : 10 < 0
//   ? console.log('...no...')
//   : console.log('M-maybe..?');

const verdict = false;
verdict ? alert('Umm... Hello world..?') : console.log('NaN is actually a number');

export {};
