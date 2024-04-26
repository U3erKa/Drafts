class Animal {
  species: string;
  name: string;
  constructor(species: string, name: string) {
    this.species = species;
    this.name = name;
  }
  eat(food: string) {
    return 'Eating default food';
  }
  speak() {
    return "it's quiet";
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super('snek', name);
  }
  eat(food: string) {
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
  constructor(name: string) {
    super('catty', name);
  }
  eat(food: string) {
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
  feed(animal: { eat: (arg0: any) => any }, food: string) {
    if (animal instanceof Animal) {
      return animal.eat(food);
    }
  },
  train(animal: { name: any }) {
    if (animal instanceof Animal) {
      return `Training ${animal.name}`;
    }
  },
  voice(animal: { speak: () => any }) {
    if (animal instanceof Animal) {
      return animal.speak();
    }
  },
};

const animal = new Animal('Copium', 'DefaultName');
const snake = new Snake('Hersss');
const cat = new Cat('Loremium');

export { Animal, Snake, Cat, tamer };
