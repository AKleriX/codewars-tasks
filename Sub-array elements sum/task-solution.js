function elementsSum(arr, d = 0) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i][arr.length - i - 1] != undefined ? arr[i][arr.length - i - 1] : d;
  return sum;
}
