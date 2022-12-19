class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  eat() {
    return 'Eating default food';
  }
  speak() {
    return "it's quiet";
  }
}

class Snake extends Animal {
  constructor(name) {
    super('snek', name);
  }
  eat(food) {
    if (food === 'mouse') {
      return 'Eating BIG mouse';
    }
    throw new Error('try again');
  }
  speak() {
    return 'HISS...';
  }
}

class Cat extends Animal {
  constructor(name) {
    super('catty', name);
  }
  eat(food) {
    if (food === 'mouse') {
      return 'Eating mouse';
    }
    throw new Error('try again');
  }
  speak() {
    return 'Meow...';
  }
}

const tamer = {
  feed(animal, food) {
    if (animal instanceof Animal) {
      return animal.eat(food);
    }
  },
  train(animal) {
    if (animal instanceof Animal) {
      return `Training ${animal.name}`;
    }
  },
  voice(animal) {
    if (animal instanceof Animal) {
      return animal.speak();
    }
  },
};

const animal = new Animal('Copium', 'DefaultName');
const snake = new Snake('Hersss');
const cat = new Cat('Loremium');
