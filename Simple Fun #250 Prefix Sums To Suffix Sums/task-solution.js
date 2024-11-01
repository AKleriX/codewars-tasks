const prefixSumsToSuffixSums = (prefixSums) => {
  const n = prefixSums.length,
    totalSum = prefixSums[n - 1],
    suffixSums = Array(n);
  suffixSums[0] = totalSum;
  for (let i = 1; i < n; i++) suffixSums[i] = totalSum - prefixSums[i - 1];
  return suffixSums;
};
