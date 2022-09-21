'use strict';
class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
  getFullName() {
    return `${this.name} ${this.surname}`
  }
}

const user001 = new User('Vik','S', undefined);
const user002 = new User('Viktor','Stepanov', 20);
const user003 = new User('U3erKa','U3', 69420);
const user004 = new User('U2erKa','U2', 17);
const user005 = new User('U4erKa','U4', 0);
