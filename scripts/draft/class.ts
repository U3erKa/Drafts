'use strict';

class Worker {
  // constructor(firstName: string, lastName: string, daysWorked = 0, paymentRate = MIN_SALARY) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.paymentRate = paymentRate;
  //   this.daysWorked = daysWorked;
  // }

  #firstName?: string;
  constructor(
    firstName: string,
    private _lastName: string,
    private _daysWorked = 0,
    private _paymentRate = MIN_SALARY,
  ) {
    this.firstName = firstName;
  }

  get fullName() {
    return `${this.#firstName} ${this._lastName}`;
  }

  get workerPayment() {
    return this._daysWorked * this._paymentRate;
  }

  set firstName(newFirstName: string) {
    if (typeof newFirstName !== 'string' || newFirstName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    this.#firstName = newFirstName.trim();
  }

  set lastName(lastName: string) {
    if (typeof lastName !== 'string' || lastName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    this._lastName = lastName.trim();
  }

  set daysWorked(daysWorked: number) {
    if (typeof daysWorked !== 'number' || isNaN(daysWorked)) {
      throw new TypeError('daysWorked must be not negative integer');
    }
    if (daysWorked < 0 || !Number.isInteger(daysWorked)) {
      throw new RangeError('daysWorked must be not negative integer');
    }
    this._daysWorked = daysWorked;
  }

  set paymentRate(paymentRate: number) {
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
  static isWorker(obj: Worker | object) {
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

// incapsulation
class Figure {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Triangle extends Figure {
  #a: number;
  #h: number;
  b: number;
  c: number;
  constructor(a: number, h: number, b: number, c: number) {
    super('triangle');
    this.#a = a; // інкапсуляція параметрів
    this.#h = h;
    this.b = b;
    this.c = c;
  }

  get side() {
    return this.#a;
  }

  get height() {
    return this.#h;
  }

  set side(a) {
    if (typeof a !== 'number' || isNaN(a)) {
      throw new TypeError('Triangle side must be number');
    }

    this.#a = a;
  }

  getArea(mode = 'height') {
    switch (mode) {
      case 'height': {
        return 0.5 * this.#a * this.#h; // приховали складні обчислення
      }
      case 'geron': {
        const p = (this.#a + this.b + this.c) / 2;

        return Math.sqrt(p * (p - this.#a) * (p - this.b) * (p - this.c));
      }
    }
  }
}

class Rectangle extends Figure {
  #sideA!: number;
  #sideB!: number;
  constructor(a: number, b: number) {
    super('rectangle');
    this.sideA = a;
    this.sideB = b;
  }

  get sideA() {
    return this.#sideA;
  }

  get sideB() {
    return this.#sideB;
  }

  set sideA(num) {
    this.assertPositiveNumber(num);
    this.#sideA = num;
  }

  set sideB(num) {
    this.assertPositiveNumber(num);
    this.#sideB = num;
  }

  getArea() {
    return this.#sideA * this.#sideB;
  }

  private assertPositiveNumber(num: number): asserts num is number {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }

    if (num <= 0) {
      throw new RangeError();
    }
  }
}

class Rhombus extends Figure {
  constructor(
    public a: number = a,
    public h: number = h,
  ) {
    super('rhombus');
  }

  getArea() {
    return this.a * this.h;
  }
}

const fig1 = new Figure('some figure');
const triangle1 = new Triangle(10, 5, 3, 8);
const rect1 = new Rectangle(5, 8);
const rhombus1 = new Rhombus(5, 7);

console.log(triangle1);

export {};
