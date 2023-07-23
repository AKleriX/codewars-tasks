const twoArePositive = (...nums) => {
  const arr = [...nums].sort((a, b) => a - b);
  return arr[0] <= 0 && arr.slice(1).every((n) => n > 0);
};
