class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

let nodeA1 = new ListNode(3);
let nodeA2 = new ListNode(7);
let nodeA3 = new ListNode(8);
let nodeA4 = new ListNode(10);
nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = nodeA4;

let nodeB1 = new ListNode(99);
let nodeB2 = new ListNode(1);
let nodeB3 = new ListNode(8);
let nodeB4 = new ListNode(10);
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = nodeB4;

let listA = new LinkedList(nodeA1);
let listB = new LinkedList(nodeB1);
let combinedSize = listA.size() + listB.size();

function findIntersectingNode(combinedSize) {
  console.log({ A: listA });
  console.log({ B: listB });
  console.log(combinedSize);
}

findIntersectingNode(combinedSize);
