function arr2bin(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] !== 'number') return false;
    else sum += arr[i];
  return sum.toString(2);
}
