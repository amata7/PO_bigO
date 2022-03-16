let valArray = [1, 2, 3, 7, 1, 1, 6, 2];

class Stack {
  constructor(val) {
    this.val = val;
  }
  pushToStack(val) {
    if (val === undefined) {
      throw new Error('Missing parameter to push');
    } else {
      return valArray[valArray.push(val) - 1];
    }
  }
  popFromStack() {
    if (valArray.length === 0) {
      throw new Error('No values inside of array.');
    } else {
      return valArray.pop();
    }
  }
  maxFromStack() {
    if (valArray.length === 0) {
      throw new Error('No values inside of array.');
    } else {
      return valArray.reduce(function (a, b) {
        return Math.max(a, b);
      }, -Infinity);
    }
  }
}
