// Calculate the number of inversions in array
function countInversions( array ){
    let inv = 0;
    for (let i = 0; i < array.length - 1; i++)
      for (let j = i + 1; j < array.length; j++)
        if (array[i] > array[j]) inv++;
    return inv;
  }