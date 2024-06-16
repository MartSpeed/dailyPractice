// write two functions that find the factorials of any number.
// one should use recursive, the other should use a for loop
function findFactorialRecursive(number) {
  // code here
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
function findFactorialIterative(number) {
  // code here
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

// console.log('iteration', findFactorialIterative(5));
// console.log('recursion', findFactorialRecursive(5));

// recursion, using the fibonacci sequence
// given a number N return the index value of the Fibonacci
// sequence, where the sequence is:

// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is the sum of
// the previous 2 value, that means that for N=5-> 2=3

function fibonacciIterative(n) {
  // code here
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
function fibonacciRecursive(n) {
  // code here
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log('fibonacci iterative', fibonacciIterative(0));
console.log('fibonacci recursive', fibonacciRecursive(0));
