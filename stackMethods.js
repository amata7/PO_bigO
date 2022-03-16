let valArray = [];

class Stack {
  constructor(val) {
    this.val = val;
  }
  static valArray = [];
  pushToStack(val) {
    if (val === undefined) {
      throw new Error('Missing parameter to push');
    } else {
      return valArray[valArray.push(val) - 1];
    }
  }
  popFromStack() {
    if (valArray.length === 0) {
      throw new Error('Cannot pop a value from an empty array');
    } else {
      return valArray.pop();
    }
  }
  maxFromStack() {
    if (valArray.length === 0) {
      throw new Error('Cannot find maximum value from an empty array');
    } else {
      return valArray.reduce(function (a, b) {
        return Math.max(a, b);
      }, -Infinity);
    }
  }
}

//Use 'node stackMethods.js' to run the example below
const test = new Stack();
console.log({ 'Initial Array': valArray });
console.log({ 'Testing push': test.pushToStack(1) }, { 'New Array': valArray });
console.log({ 'Testing push': test.pushToStack(2) }, { 'New Array': valArray });
console.log({ 'Testing push': test.pushToStack(7) }, { 'New Array': valArray });
console.log({ 'Testing max': test.maxFromStack() });
console.log(
  { 'Testing push': test.pushToStack(457) },
  { 'New Array': valArray }
);
console.log({ 'Testing max': test.maxFromStack() });
console.log(
  { 'Testing pop': test.popFromStack() },
  { 'Popped Array': valArray }
);
console.log({ 'Testing max': test.maxFromStack() });
console.log(
  { 'Testing pop': test.popFromStack() },
  { 'Popped Array': valArray }
);
console.log({ 'Testing max': test.maxFromStack() });
console.log(
  { 'Testing pop': test.popFromStack() },
  { 'Popped Array': valArray }
);
console.log({ 'Testing max': test.maxFromStack() });
console.log(
  { 'Testing pop': test.popFromStack() },
  { 'Popped Array': valArray }
);
// Uncomment below console logs to test error handling of the max or pop functions one at a time
// console.log({ 'Testing max': test.maxFromStack() });
// console.log({ 'Testing pop': test.popFromStack() }, { 'Popped Array': valArray });
