class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueque(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

console.log('1', myQueue.enqueque('spiderman'));
console.log('2', myQueue.enqueque('green lantern'));
console.log('3', myQueue.enqueque('forge'));
console.log('4', myQueue.enqueque('gambit'));
// console.log('5', myQueue.dequeue());
// console.log('6', myQueue.dequeue());
// console.log('7', myQueue.dequeue());
// console.log('8', myQueue.dequeue());
console.log('final', myQueue.peek());
