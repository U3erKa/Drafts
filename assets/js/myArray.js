class MyArray {
  constructor() {
    this.length = 0;
  }
  push(...elements) {
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
  concat(...items) {
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
  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}
const arr1 = new MyArray();
arr1.push(123);
arr1.push('123');
arr1.push('copium');

const arr3 = new MyArray();
arr3.push(6345, 344675, 23, 4576, [4, 4, 4, 4]);
const arr2 = arr1.concat(arr3);
