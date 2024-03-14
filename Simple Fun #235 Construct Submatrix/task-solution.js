const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (!rowsToDelete.includes(i)) {
      const currentRow = [];
      for (let j = 0; j < matrix[i].length; j++)
        if (!columnsToDelete.includes(j)) currentRow.push(matrix[i][j]);
      res.push(currentRow);
    }
  }
  return res;
};
