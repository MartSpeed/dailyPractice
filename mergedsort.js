// mergedSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// result = [0, 3, 4, 4, 6, 30, 31]

// function mergedSortedArrays(...arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     const dataObj = arr.join(',');
//     console.log(dataObj);
//     const newArray = [];
//     newArray.push(dataObj.sort((a, b) => a - b));
//     console.log(newArray);
//     // console.log(arr);
//   }
// }

function mergedSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  // check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

mergedSortedArrays([0, 3, 4, 31], [4, 6, 30]);
