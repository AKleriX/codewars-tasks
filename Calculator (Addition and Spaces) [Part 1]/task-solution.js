function calculate(str) {
  let nums = str.replace(/\s+/g, '').split(/\+/).map(Number);
  return nums.reduce((sum, n) => sum + n);
}
