class Figure {
  name: any;
  constructor(name: any) {
    this.name = name;
  }
}

class Rectangle extends Figure {
  #a: number;
  #b: number;
  constructor(a: number, b: number) {
    super(a === b ? 'square' : 'rectangle');
    this.a = a;
    this.b = b;
  }
  getArea() {
    return this.#a * this.#b;
  }
  set a(value: number) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new TypeError('value must be not negative integer');
    }
    this.#a = value;
  }
  set b(value: number) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new TypeError('value must be not negative integer');
    }
    this.#b = value;
  }
}

const square = new Rectangle(5, 5);
const rectangle = new Rectangle(5, 10);

export { Figure, Rectangle };
