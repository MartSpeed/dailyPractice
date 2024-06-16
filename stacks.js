class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // this.top = null;
    // this.bottom = null;
    // this.length = 0;
    this.array = [];
  }
  peek() {
    // return this.top;
    return this.array[this.array.length - 1];
  }
  push(value) {
    // const newNode = new Node(value);
    // if (this.length === 0) {
    //   this.top = newNode;
    //   this.bottom = newNode;
    // } else {
    //   const holdingPointer = this.top;
    //   this.top = newNode;
    //   this.top.next = holdingPointer;
    // }
    // this.length++;
    this.array.push(value);
    return this;
  }
  pop() {
    // if (!this.top) {
    //   return null;
    // }
    // if (this.top === this.bottom) {
    //   this.bottom = null;
    // }
    // // const holdingPointer = this.top;
    // this.top = this.top.next;
    // this.length--;
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
console.log('1', myStack.push('google'));
console.log('2', myStack.push('udemy'));
console.log('3', myStack.push('discord'));
console.log('4', myStack.pop());
console.log('5', myStack.pop());
// console.log('6', myStack.pop());
console.log('final', myStack.peek());
