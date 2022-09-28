function cubeOdd(arr) {
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== parseInt(arr[i])) return undefined;
    else if (arr[i] ** 3 % 2) oddSum += arr[i] ** 3;
  return oddSum;
}
