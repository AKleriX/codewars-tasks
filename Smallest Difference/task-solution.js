const smallestDiff = (arr1, arr2) => {
  if (arr1.length === 0 && arr2.length === 0) return -1;
  if (arr1.length === 0) return Math.min(...arr2);
  if (arr2.length === 0) return Math.min(...arr1);

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    minDiff = Infinity;

  while (i < arr1.length && j < arr2.length) {
    const diff = Math.abs(arr1[i] - arr2[j]);
    minDiff = Math.min(minDiff, diff);

    if (arr1[i] < arr2[j]) i++;
    else j++;
  }

  return minDiff;
};
