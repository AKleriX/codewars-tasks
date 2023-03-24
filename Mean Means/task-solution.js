function geo_mean(nums, arith_mean) {
  let arr = [...nums];
  arr.push(arith_mean * (nums.length + 1) - nums.reduce((s, n) => n + s, 0));
  return arr.reduce((p, n) => p * n, 1) ** (1 / arr.length);
}
