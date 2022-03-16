let valArray = [1, 2, 3];

class Stack {
  constructor(val) {
    this.val = val;
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

const newStack = new Stack();
console.log({ Array: valArray });

console.log(
  { 'Get Pop Function': newStack.popFromStack() },
  { 'Get Max Function': newStack.max }
);

console.log({ Array: valArray });
