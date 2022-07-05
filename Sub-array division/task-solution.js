function solve(arr, n, sum = 0, idx = 0) {
  for (let i = idx; i < arr.length; i++) {
    sum += arr[i];
    if (!(sum % n) || solve(arr, n, sum - arr[i], i + 1)) return true;
  }
  return false;
}
