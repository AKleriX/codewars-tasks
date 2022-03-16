function maxAndMin(arr1, arr2) {
  let min = Infinity,
    max = 0;
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < min) min = Math.abs(arr1[i] - arr2[j]);
      if (Math.abs(arr1[i] - arr2[j]) > max) max = Math.abs(arr1[i] - arr2[j]);
    }
  return [max, min];
}
