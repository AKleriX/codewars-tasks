function threeInOne(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 3) res.push(arr.slice(i, i + 3).reduce((s, n) => s + n));
  return res;
}
