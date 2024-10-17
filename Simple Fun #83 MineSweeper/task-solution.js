const minesweeper = (matrix) => {
  const rows = matrix.length,
    cols = matrix[0].length,
    result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++)
      for (let i = -1; i <= 1; i++)
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            (i !== 0 || j !== 0) &&
            matrix[newRow][newCol]
          )
            result[row][col]++;
        }

  return result;
};
