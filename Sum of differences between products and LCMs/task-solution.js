const sumDifferencesBetweenProductsAndLCMs = (pairs) => pairs.reduce((sum, nums) => {
  if (nums[0] === 0 || nums[1] === 0) return sum;
  return sum + (nums[0] * nums[1] - (Math.abs(nums[0] * nums[1]) / gcd(nums[0], nums[1])));
}, 0);

const gcd = (a, b) => b ? gcd(b, a % b) : a;