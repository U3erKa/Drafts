const obj = {
  display: 'flex',
  lineHeight: 1.5,
  opacity: 0,
  'background color': 'red', // try not to use
};

const phone = {
  color: 'blue',
  model: 'Mi A2',
  switchOn: function () {
    //object's method
    console.log('Switched ON!');
  },
  cpu: {
    model: 'qualcomm',
    frequency: 4,
    frequencyUnit: 'GHz',
  },
  test: 'test',
};

// CRUD!!!
// CREATE
// const obj1 = {}; // literal, best
// const obj1 = Object(); // Bad
// const obj1 = new Object(); // Real bad
// READ
console.log();
console.log(phone.color);
console.log(phone);
console.log(phone.cpu.frequency);
// @ts-expect-error
console.log(phone.qweqweqwe); //undefined
// alert(phone); // useless
// UPDATE property
phone.color = 'red';
// ADD property
// @ts-expect-error
phone.battery = 4000;
// DELETE
// @ts-ignore
delete phone.test;

//constructor function, starts from capital letter
const User = function (name: string, surname: string, age: number): void {
  this.name = name;
  this.surname = surname;
  this.age = age;
  // assume that function is the same for all users
  this.brushTeeth = function () {
    console.log('In progress...');
  };
  // return NaN; // return can't work here
};

// @ts-expect-error
const user001 = new User('Vik', 'S', undefined);
const user002 = new User('Viktor', 'U3', 69420);
const user003 = new User('U3erKa', 'Stepanov', 20);
const user004 = new User('U3erKa', 'U3', 69420);
const user005 = new User('U3erKa', 'U3', 69420);
console.log(user004 === user005); // false
const user006 = user005;
console.log(user005 === user006); // true

const str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eligendi quae
nemo reiciendis commodi, in exercitationem, molestias, labore modi nisi doloremque
minus architecto quos nam. Ut voluptatibus repudiandae exercitationem quibusdam.`; // template string

const number1 = 10;
const number2 = 20;
// const sum = number1 + number2;
if (isNaN(number1 - number2)) {
  console.log('ERROR!');
} else {
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  console.log(`${number1} > ${number2} ? ${number1 > number2 ? 'true' : 'false'}`);
}

const key = 'age';

const user101 = {
  name: 'Vik',
  100: 'S.',
  [key]: undefined,
  'brush teeth': function () {
    console.log('Done!');
  },
};

console.log(user101['brush teeth']);
console.log(user101[10 * 10]);
console.log(key);
console.log(user101[key]);
// @ts-expect-error
user101[key] = -1;

/*
const user002 = {
  name: 'Viktor',
  surname: 'Stepanov',
  age: 20,
  brushTeeth: function () {
    for (let i = 0; i < 100; i++) {
      console.log('Brushing in progress');
    }
    console.log('Done!');
    return true;
  },
};

const user003 = {
  name: 'Aster',
  surname: 'Win Ding',
  age: -1,
  brushTeeth: function () {
    console.log(';');
  },
};
*/

/*
 */

export {};
