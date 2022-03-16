let valArray = [1];

class Stack {
  constructor(val) {
    this.val = val;
  }
  get max() {
    return this.maxFromStack();
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

const newStack = new Stack();
console.log({ 'Get Max Function': newStack.max });
