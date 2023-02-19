const intDiff = (arr, n) => {
  let pairsNums = [];
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (Math.abs(arr[i] - arr[j]) === n) pairsNums.push([i, j]);
  return pairsNums.length;
};
