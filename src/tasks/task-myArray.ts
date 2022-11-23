class MyArray {
  length: number;
  constructor() {
    this.length = 0;
  }
  push(...elements: any[]) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length++] = elements[i];
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const deleted = this[--this.length];
    delete this[this.length];
    return deleted;
  }
  concat(...items: MyArray[]) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      // newArray[newArray.length++] = this[i];
      newArray.push(this[i]);
    }
    for (let i = 0; i < items.length; i++) {
      if (MyArray.isMyArray(items[i])) {
        for (let j = 0; j < items[i].length; j++) {
          newArray.push(items[i][j]);
        }
      } else {
        newArray.push(items[i]);
      }
    }
    return newArray;
  }
  shift() {
    const deleted = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.length];
    return deleted;
  }
  unshift(...value: string[]) {
    for (let i = this.length + value.length - 1; i >= value.length; i--) {
      this[i] = this[i - value.length];
    }
    for (let i = 0; i < value.length; i++) {
      this[i] = value[i];
    }
    return (this.length += value.length);
  }
  forEach(callback: (arg0: any, arg1: number, arg2: this) => void) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  map(callback: (arg0: any, arg1: number, arg2: this) => any) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }
  filter(callback: (arg0: any, arg1: number, arg2: this) => any) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  reverse() {
    let oldArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      oldArray.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = oldArray[this.length - i - 1];
    }
    return this;
  }

  [Symbol.iterator]() {
    const context = this;
    let i = 0;
    return {
      next() {
        return {
          done: i >= context.length,
          value: context[i++],
        };
      },
    };
  }
  static isMyArray(obj: any) {
    return obj instanceof MyArray;
  }
}
const arr1 = new MyArray();
arr1.push(123);
arr1.push('123');
arr1.push('copium');

const arr2 = new MyArray();
arr2.push(6345, 344675, 23, 4576, [4, 4, 4, 4]);
arr2.unshift('234', '123', 'qwews');

const arr3 = arr1.concat(arr2);

// for (const item of arr1) {
// console.log('arr1');
//   console.log(item);
// }

export { MyArray };
