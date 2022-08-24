function polygonPerimeter(matrix) {
  let per = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j]) {
        if (!matrix[i - 1] || !matrix[i - 1][j]) per++;
        if (!matrix[i + 1] || !matrix[i + 1][j]) per++;
        if (!matrix[i][j - 1]) per++;
        if (!matrix[i][j + 1]) per++;
      }
  return per;
}
