const swapDiagonals = (matrix) => {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]];
    newMatrix[i][i] = matrix[i][matrix.length - 1 - i];
    newMatrix[i][matrix.length - 1 - i] = matrix[i][i];
  }
  return newMatrix;
};
