function reverseString(string) {
  // check the input
  if (!string || string.length < 2 || typeof string !== 'string') {
    return `not successful`;
  }

  const backwards = [];
  const item = string.length - 1;
  for (let i = item; i >= 0; i--) {
    backwards.push(string[i]);
  }
  console.log(backwards);

  return backwards.join('');
}

reverseString('hello my name is Albedo...');
