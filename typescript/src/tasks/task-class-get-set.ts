'use strict';
class RangeValidator {
  private _from: number;
  private _to: number;
  constructor(from: number, to: number) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get range() {
    return this.#array(this._from, this._to);
  }

  set from(from) {
    if (typeof from !== 'number' || isNaN(from)) {
      throw new TypeError('from must be a number');
    }
    if (!Number.isInteger(from)) {
      throw new RangeError('from must be integer');
    }
    if (from > this._to) {
      throw new RangeError('from must not be higher than to');
    }
    this._from = from;
  }
  set to(to) {
    if (typeof to !== 'number' || isNaN(to)) {
      throw new TypeError('to must be a number');
    }
    if (!Number.isInteger(to)) {
      throw new RangeError('to must be integer');
    }
    if (this._from > to) {
      throw new RangeError('to must not be lower than from');
    }
    this._to = to;
  }

  #array(from: number, to: number) {
    if (this._from > this._to) {
      throw new RangeError('from must not be higher than to');
    }
    let array = [];
    for (let i = 0; i <= to - from; i++) {
      array[i] = i + from;
    }
    return array;
  }
  validate(number: unknown) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new TypeError('number must be a number');
    }
    if (!Number.isInteger(number)) {
      throw new RangeError('number must be integer');
    }

    for (let i = 0; i < this.range.length; i++) {
      if (this.range[i] === number) {
        return number;
      }
    }
    throw new RangeError(`${number} is not in the array`);
  }
}

const rangeObj = new RangeValidator(5, 10);
console.log(rangeObj);

export { RangeValidator };
