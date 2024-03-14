const differentSquares = (matrix) => {
  let counter = new Set();
  for (let i = 0; i < matrix.length - 1; i++)
    for (let j = 0; j < matrix[i].length - 1; j++)
      counter.add([matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]].join());
  return counter.size;
};
