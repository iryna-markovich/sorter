class Sorter {
  constructor() {
    this.array = [];
    this.compareFunctionByDefault = function (a, b) {
      return a - b;
    };
    this.compareFunction = this.compareFunctionByDefault;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let arrSort = [];
    for (let i = 0; i < indices.length; i++) {
      arrSort.push(this.array[indices[i]]);
    }
    indices.sort(this.compareFunctionByDefault);
    arrSort.sort(this.compareFunction);

    for (let i = 0; i < indices.length; i++) {
      this.array[indices[i]] = arrSort[i];
    }
    return this.array;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;