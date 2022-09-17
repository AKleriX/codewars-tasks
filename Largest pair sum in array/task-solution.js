function largestPairSum(numbers) {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((s, n) => s + n);
}
