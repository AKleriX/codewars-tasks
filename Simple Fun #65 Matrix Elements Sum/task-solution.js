function matrixElementsSum(matrix) {
  let brokeIndexes = new Set(),
    cost = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) {
      if (!brokeIndexes.has(j))
        if (matrix[i][j] === 0) brokeIndexes.add(j);
        else cost += matrix[i][j];
    }
  return cost;
}
