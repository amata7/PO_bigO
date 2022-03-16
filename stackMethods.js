let valArray = [1, 5, 9];

class Stack {
  constructor(val) {
    this.val = val;
  }
  get max() {
    return this.maxFromStack();
  }
  maxFromStack() {
    return valArray.reduce(function (a, b) {
      return Math.max(a, b);
    }, -Infinity);
  }
}

const newStack = new Stack(1);
// console.log(newStack);
console.log({ 'Get Max Function': newStack.max });
