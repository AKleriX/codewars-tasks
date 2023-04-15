function sum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) sum += matrix[i][i] + matrix[i][matrix.length - 1 - i];
  return sum;
}
