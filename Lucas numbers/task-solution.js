const lucasnum = (n) => {
  let nums = [2, 1];
  const l = (n) => {
    if (nums[n]) return nums[n];
    nums[n] = n > 0 ? l(n - 1) + l(n - 2) : l(n + 2) - l(n + 1);
    return nums[n];
  };
  return l(n);
};
