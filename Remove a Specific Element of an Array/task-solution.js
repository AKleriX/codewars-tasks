function selectSubarray(arr) {
  let minQ = Infinity,
    ans = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0,
      prod = 1;
    for (let j = 0; j < arr.length; j++)
      if (i !== j) {
        sum += arr[j];
        prod *= arr[j];
      }
    if (sum !== 0)
      if (Math.abs(prod / sum) < minQ) {
        ans = [[i, arr[i]]];
        minQ = Math.abs(prod / sum);
      } else if (Math.abs(prod / sum) === minQ) ans.push([i, arr[i]]);
  }
  return ans.length === 1 ? ans[0] : ans;
}
