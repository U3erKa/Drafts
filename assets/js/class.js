'use strict';
class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  isAdult(adultAge = 18) {
    return this.age >= adultAge;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const user001 = new User('Vik', 'S', undefined);
const user002 = new User('Viktor', 'Stepanov', 20);
const user003 = new User('U3erKa', 'U3', 69420);
const user004 = new User('U2erKa', 'U2', 17);
const user005 = new User('U4erKa', 'U4', 0);

class Worker {
  #firstName;

  constructor(firstName, lastName, daysWorked = 0, paymentRate = MIN_SALARY) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.paymentRate = paymentRate;
    this.daysWorked = daysWorked;
  }

  get fullName() {
    return `${this.#firstName} ${this._lastName}`;
  }

  get workerPayment() {
    return this._daysWorked * this._paymentRate;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string' || newFirstName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    this.#firstName = newFirstName.trim();
  }

  set lastName(lastName) {
    if (typeof lastName !== 'string' || lastName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    this._lastName = lastName.trim();
  }

  set daysWorked(daysWorked) {
    if (typeof daysWorked !== 'number' || isNaN(daysWorked)) {
      throw new TypeError('daysWorked must be not negative integer');
    }
    if (daysWorked < 0 || !Number.isInteger(daysWorked)) {
      throw new RangeError('daysWorked must be not negative integer');
    }
    this._daysWorked = daysWorked;
  }

  set paymentRate(paymentRate) {
    if (paymentRate < MIN_SALARY) {
      paymentRate = MIN_SALARY;
    }
    this._paymentRate = paymentRate;
  }

  #isAdult() {
    return true;
  }

  isReallyAdult() {
    if (Math.random() > 0.5) {
      return this.#isAdult();
    }
  }

  // Worker.isWorker
  static isWorker(obj) {
    return obj instanceof Worker;
  }
}

const MIN_SALARY = 5000;

const employee = [
  new Worker('U1erKa', 'U1', 30, 9001),
  new Worker('U2erKa', 'U2', 40),
  new Worker('U3erKa', 'U3', 50, 6000),
  new Worker('U4erKa', 'U4'),
  new Worker('U5erKa', 'U5', 10, 1000 * 3),
];

console.log(employee);
for (let i = 0; i < employee.length; i++) {
  console.log(employee[i].workerPayment);
}

// employee[0].setFirstName('u11')
