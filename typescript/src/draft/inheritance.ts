'use strict';

function Phone(model: string, manufacturer: string) {
  this.model = model;
  this.manufacturer = manufacturer;
}

// phone1.call === phone2.call is true
const phoneProto = {
  isOn: false,
  call: function (number: number | string) {
    console.log(`${this.manufacturer} ${this.model} is caling ${number}`);
  },
  // __proto__: deviceProto,
};

const deviceProto = {
  turnOn: function () {
    console.log('device is turned ON!');
  },
};

Phone.prototype = phoneProto;

// @ts-expect-error
const phone1: PhoneConstructor = new Phone('Pro', 'Android');
// @ts-expect-error
const phone2 = new Phone('Lite', 'Xiaomi');

// const phone1 = {
//   model: 'Pro',
//   manufacturer: 'Android',
// };

// const phone2 = {
//   model: 'Lite',
//   manufacturer: 'Xiaomi',
// };

// phone1.__proto__ = phoneProto;
// phone2.__proto__ = phoneProto;
// phoneProto.__proto__ = deviceProto;

// phone1.call === phone2.call is false

// arr1.push === arr2.push is true, prototype is array
const arr1 = [1];
const arr2 = [1];

export {};
