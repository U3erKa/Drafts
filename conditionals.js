const friendName = 'Vik';
const bigBadBossGuy = 'Vik';
const bigShot = 'Viktor';
const notMe = 'U2erKa';

const getSumOfTwo = function (num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number' && !isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    return result;
  } else {
    return NaN;
  }
};

if (friendName === bigBadBossGuy) {
  console.log('It is pleasure to see you.')
} else if (friendName === bigShot) {
  console.log('Oh, hello there!')
} else if (friendName === notMe) {
  console.log('If it isn\'t ' + notMe + '...')
} else {
  console.log('Hello. Do we know each other?')
}
