function solve(arr) {
  let seqCounter = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = 1; j < arr.length; j++)
      if (arr.includes(arr[i] + j) && arr.includes(arr[i] + j * 2)) seqCounter++;
  return seqCounter;
}
