const largestCrossSum = (matrix) => {
  let m = matrix.length,
    n = matrix[0].length,
    rowSums = matrix.map((row) => row.reduce((a, b) => a + b, 0)),
    colSums = Array(n).fill(0);
  for (let j = 0; j < n; j++) for (let i = 0; i < m; i++) colSums[j] += matrix[i][j];
  let maxSum = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      let sum = rowSums[i] + colSums[j] - matrix[i][j];
      if (sum > maxSum) maxSum = sum;
    }
  return maxSum;
};
