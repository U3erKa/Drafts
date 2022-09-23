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

  /**
   * @param {string} newFirstName - can change worker's first name
   */
  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string' || newFirstName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    this.#firstName = newFirstName.trim();
  }

  /**
   * @param {string} lastName
   */
  set lastName(lastName) {
    if (typeof lastName !== 'string' || lastName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    this._lastName = lastName.trim();
  }

  /**
   * @param {number} daysWorked
   */
  set daysWorked(daysWorked) {
    if (typeof daysWorked !== 'number' || isNaN(daysWorked)) {
      throw new TypeError('daysWorked must be not negative integer');
    }
    if (daysWorked < 0 || !Number.isInteger(daysWorked)) {
      throw new RangeError('daysWorked must be not negative integer');
    }
    this._daysWorked = daysWorked;
  }

  /**
   * @param {number} paymentRate
   */
  set paymentRate(paymentRate) {
    if (paymentRate < MIN_SALARY) {
      paymentRate = MIN_SALARY;
    }
    this._paymentRate = paymentRate;
  }

  #isAdult() {
    return true;
  }

  // employee[0].isReallyAdult()
  isReallyAdult() {
    if (Math.random() > 0.5) {
      return this.#isAdult();
    }
  }

  // Worker.isWorker
  static isWorker(obj) {
    return obj instanceof Worker;
  }

  //Worker.Pi
  static Pi = 3.14;
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

class Animal {
  #name;

  constructor(species, name, color, diet) {
    this.species = species;
    this.name = name;
    this.color = color;
    this.diet = diet;
  }

  // методы обьекта
  get name() {
    // возвращает значение
    return this.#name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Must be string');
    }

    // задает значение для свойства
    this.#name = value;
  }

  eat() {
    return `${this.name} is eating`;
  }

  static isAnimal(obj) {
    return obj instanceof Animal;
  }

  static Pi = 3.14;
}

const animal1 = new Animal('Grizun', 'Willy', 'brown', 'herbivore');

if (Animal.isAnimal(animal1)) {
  console.log('this is animal');
}

class Squirrel extends Animal {
  constructor(name, color) {
    // calls constructor Animal and gives it some values
    super('squirrel', name, color, 'acorn');
  }
}

const sq = new Squirrel('Belkas', 'orange');
