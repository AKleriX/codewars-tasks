function sum() {
  let currentSum = 0;
  const nextSum = (n = null) => {
    if (n === null) return currentSum;
    currentSum += n;
    return nextSum;
  };
  return nextSum(arguments[0]);
}
