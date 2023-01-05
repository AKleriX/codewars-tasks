function oddOne(arr) {
  for (let i = 0; i < arr.length; i++) if (arr[i] % 2) return i;
  return -1;
}
