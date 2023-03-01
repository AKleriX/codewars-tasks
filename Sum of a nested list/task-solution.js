const sumNested = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += Array.isArray(arr[i]) ? sumNested(arr[i]) : arr[i];
  return sum;
};
