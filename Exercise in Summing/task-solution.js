function minimumSum(values = [], n) {
  const sortValues = [...values].sort((a, b) => a - b);
  let minSum = 0;
  for (let i = 0; i < n && i < values.length; i++) minSum += sortValues[i];
  return minSum;
}

function maximumSum(values = [], n) {
  const sortValues = [...values].sort((a, b) => b - a);
  let maxSum = 0;
  for (let i = 0; i < n && i < values.length; i++) maxSum += sortValues[i];
  return maxSum;
}
