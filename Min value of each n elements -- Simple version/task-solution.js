function minValue(arr, n) {
  let minArr = [];
  for (let i = 0; i <= arr.length - n; i++) minArr.push(Math.min.apply(null, arr.slice(i, i + n)));
  return minArr;
}
