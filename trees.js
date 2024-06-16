/**Binary Tree
 * rules: each node can only have 0,1, or 2 nodes and each child can only have one parent.
 *
 * Perfect Binary Tree
 * rules: a node has 0 children or 2 children and all leaves are full
 *
 * Full Binary Tree
 * rules: a node has 0 or 2 children but never one child
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // if the tree is empty & no root node add this as root null
    if (this.root === null) {
      this.root = newNode;
    } else {
      // if root value is not null, set the value
      let currentNode = this.root;
      // to traverse the node
      while (true) {
        // traverse through the tree
        if (value < currentNode.value) {
          // traverse left
          if (!currentNode.left) {
            // check if there is a value in the left node
            currentNode.left = newNode;
            console.log('3 left', newNode);
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          // traverse right
          if (!currentNode.right) {
            currentNode.right = newNode;
            console.log('2 right', newNode);
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
    console.log('1', newNode);
  }
  lookup(value) {
    // check if a node is in the tree
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        console.log('4', currentNode);
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
        console.log('5', currentNode);
      } else if (currentNode.value === value) {
        console.log('6', currentNode);
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    //
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // delete node
        if (currentNode.right === null) {
          //
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value, make the left child the child of the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            }
            // if parent < current value, make the right child the child of the parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //Option 2 right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          //
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            // if parent < current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
            // if parent > current, make right child of the right the parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          // Option 3 right child that has left child
        } else {
          // find the right child that has a left child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parents left tree is now leftmost right tree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}
// 9,
//4, 20,
//1, 6 , 15, 170
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.lookup(90);
console.log('final', tree.remove(0));
JSON.stringify(traverseNode(tree.root));

// recursive function for the purpose of this exercise
function traverseNode(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverseNode(node.left);
  tree.right = node.right === null ? null : traverseNode(node.right);
  return tree;
}
