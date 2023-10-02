const checkRoot = (string) => {
  if (/[^\d,]/.test(string) || (string.match(/,/g) || []).length !== 3 || /\b0\b/.test(string))
    return 'incorrect input';
  let nums = string.split(',').map(Number);
  if (nums.some((n, i, arr) => i > 0 && n - 1 !== arr[i - 1])) return 'not consecutive';
  return nums.reduce(getProduct, 1) + 1 + ', ' + Math.sqrt(nums.reduce(getProduct, 1) + 1);
};

const getProduct = (p, n) => p * n;
