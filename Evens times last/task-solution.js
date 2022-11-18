const evenLast = (nums) =>
  nums.reduce((s, n, i) => (i % 2 ? s : s + n), 0) * (nums[nums.length - 1] || 0);
