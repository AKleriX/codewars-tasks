function findDupsMiss(arr) {
  let max = -Infinity,
    min = Infinity,
    dubNums = new Set(),
    firstNums = new Set(),
    sum = 0,
    missNum = null;
  for (let i = 0; i < arr.length; i++) {
    if (!firstNums.has(arr[i])) {
      firstNums.add(arr[i]);
      sum += arr[i];
    } else dubNums.add(arr[i]);
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  missNum = ((min + max) / 2) * (max - min + 1) - sum;
  return [missNum, Array.from(dubNums).sort((a, b) => a - b)];
}
