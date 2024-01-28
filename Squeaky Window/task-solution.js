const sliding = (nums, k) => {
  const res = [];
  for (let i = 0; i <= nums.length - k; i++) res.push(Math.max(...nums.slice(i, i + k)));
  return k < 0 ? [] : res;
};
