const reverseOnDiagonals = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++)
    newMatrix.push(
      matrix[i].map((n, j) =>
        i === j
          ? matrix[matrix.length - 1 - i][matrix.length - 1 - i]
          : j === matrix.length - 1 - i
          ? matrix[matrix.length - 1 - i][i]
          : n,
      ),
    );
  return newMatrix;
};
