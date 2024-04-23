const peakAndValley = (arr) => {
  const res = [];
  for (let i = 3; i < arr.length - 3; i++)
    if (
      (arr[i] > arr[i + 1] &&
        arr[i] > arr[i + 2] &&
        arr[i] > arr[i + 3] &&
        arr[i] > arr[i - 1] &&
        arr[i] > arr[i - 2] &&
        arr[i] > arr[i - 3]) ||
      (arr[i] < arr[i + 1] &&
        arr[i] < arr[i + 2] &&
        arr[i] < arr[i + 3] &&
        arr[i] < arr[i - 1] &&
        arr[i] < arr[i - 2] &&
        arr[i] < arr[i - 3])
    )
      res.push(arr[i]);
  return res;
};
