function oddOnesOut(nums) {
  let counter = nums.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {});
  return nums.filter((n) => !(counter[n] % 2));
}
