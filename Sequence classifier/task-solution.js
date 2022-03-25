function sequenceClassifier(arr) {
  let types = [0, 0, 0, 0, 0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) types[0]++;
    if (arr[i] >= arr[i - 1]) types[1]++;
    if (arr[i] < arr[i - 1]) types[2]++;
    if (arr[i] <= arr[i - 1]) types[3]++;
    if (arr[i] === arr[i - 1]) types[4]++;
  }
  return types.includes(arr.length - 1)
    ? types[4] === arr.length - 1
      ? 5
      : types.indexOf(arr.length - 1) + 1
    : 0;
}
