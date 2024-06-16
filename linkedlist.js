// what is a pointer
// let my_linked_list = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
// create Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
// create a class linked list
class DoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, previous: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // create the node
    const newNode = new Node(value);
    // setting the pointer
    newNode.next = this.head;
    // update the node
    this.head = newNode;
    this.head.previous = newNode;

    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //  check your parameters
    if (index >= this.length) {
      return this.append(value);
    }
    // when the index is not greater than or equal to
    const newNode = new Node(value);
    newNode.next = null;

    // traverse array to find the node to replace and insert
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.previous = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // check the params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const my_linked_list = new DoublyLinkedList(10);
console.log('1', my_linked_list.append(5));
console.log('2', my_linked_list.append(15));
console.log('3', my_linked_list.prepend('owl'));
console.log('4', my_linked_list.prepend('dog'));
console.log('5', my_linked_list.insert(1, 7));
console.log('5', my_linked_list.reverse());
// console.log('6', my_linked_list.insert(2, 99));
// console.log('7', my_linked_list.remove(4));
console.log('final', my_linked_list.printList());
// console.log('3', my_linked_list);
