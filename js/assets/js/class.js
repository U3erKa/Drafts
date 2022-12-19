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

// inheritance
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

// incapsulation
class Figure {
  constructor(name) {
    this.name = name;
  }
}

// class Triangle extends Figure {
//   #a;
//   #h;
//   constructor(a, h) {
//     super('triangle');
//     this.a = a;
//     this.h = h;
//     // this.#a = a; // without getters
//     // this.#h = h; // without getters
//   }
//   get area() {
//     return this.#a * this.#h * 0.5;
//   }
//   get dimensions() {
//     return `side: ${this.#a}, height: ${this.#h}`;
//   }
//   set a(value) {
//     this.#a = value;
//   }
//   set h(value) {
//     this.#h = value;
//   }
// }

class Triangle extends Figure {
  #a;
  #h;
  constructor(a, h, b, c) {
    super('triangle');
    this.#a = a; // инкапсуляция параметров
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
        return 0.5 * this.#a * this.#h; // скрыли вычислительную сложность
      }
      case 'geron': {
        const p = (this.#a + this.b + this.c) / 2;

        return Math.sqrt(p * (p - this.#a) * (p - this.b) * (p - this.c));
      }
    }
  }
}

class Rectangle extends Figure {
  #sideA;
  #sideB;
  constructor(a, b) {
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
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }

    if (num <= 0) {
      throw new RangeError();
    }

    this.#sideA = num;
  }

  set sideB(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }

    if (num <= 0) {
      throw new RangeError();
    }

    this.#sideB = num;
  }

  getArea() {
    return this.#sideA * this.#sideB;
  }
}

class Rhombus extends Figure {
  constructor(a, h) {
    super('rhombus');
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h;
  }
}

const fig1 = new Figure('some figure');
const triangle1 = new Triangle(10, 5, 3, 8);
const rect1 = new Rectangle(5, 8);
const rhombus1 = new Rhombus(5, 7);

function getFigureArea(figure, mode) {
  if(figure instanceof Figure) {
    return figure.getArea(mode);
  }
  throw new TypeError('not figure')
}

console.log(triangle1);

function getFigureArea(figure) {
  return figure.area;
}

/*
class Animal {
  #species;
  #nickname;
  constructor(species, nickname) {
    this.#species = species;
    this.#nickname = nickname;
  }

  get species() {
    return this.#species;
  }
  get nickname() {
    return this.#nickname;
  }

  speak() {
    return `${this.#species} ${this.#nickname} is speaking`;
  }

  eat() {
    return `${this.#species} ${this.#nickname} is eating`;
  }
}
*/

class Cat extends Animal {
  constructor(nickname, speech = 'meow', diet = 'fish') {
    super('Cat', nickname);
    this.speech = speech;
    this.diet = diet;
  }

  speak() {
    return `${this.species} ${this.nickname} is ${this.speech}ing`;
  }

  eat() {
    return `${this.species} ${this.nickname} is eating ${this.diet}`;
  }
}

const cat1 = new Cat('Pushok');

const trainer = {
  trainVoice: function (animal) {
    if (!animal instanceof Animal) {
      throw new TypeError();
    }
    
    if (Math.random() > 0.5) {
      return `Trainer is training ${animal.nickname} voice
${animal.speak()}`;
    }
    return `${animal.nickname} doesnt want to ${animal.speech}`
  },
};

