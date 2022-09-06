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

// CREATE
// const obj1 = {}; // literal, best
// const obj1 = Object(); // Bad
// const obj1 = new Object(); // Real bad
// READ
console.log();
console.log(phone.color);
console.log(phone);
console.log(phone.cpu.frequency);
console.log(phone.qweqweqwe); //undefined
// alert(phone); // useless
// UPDATE property
phone.color = 'red';
// ADD property
phone.battery = 4000;
// DELETE
delete phone.test;
