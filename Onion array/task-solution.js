function isOnionArray(arr) {
  let j = 0,
    k = arr.length - 1;
  while (j < k) if (arr[j++] + arr[k--] > 10) return false;
  return true;
}
