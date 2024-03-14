const fib = (num) => {
  const nums = [0, 1];
  for (let i = 2; i <= num; i++) nums.push(nums[i - 1] + nums[i - 2]);
  return nums[num];
};
