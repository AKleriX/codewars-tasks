const pell = (n) => {
  let nums = [0n, 1n];
  for (let i = 1; i < n; i++) nums.push(2n * nums[i] + nums[i - 1]);
  return nums.pop();
};
