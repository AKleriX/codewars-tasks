const getNeighbourhood = (type, matrix, [y, x]) => {
  let res = [];
  if (matrix[y] && matrix[y][x - 1] !== undefined) res.push(matrix[y][x - 1]);
  if (matrix[y - 1] && matrix[y - 1][x - 1] !== undefined && type === 'moore')
    res.push(matrix[y - 1][x - 1]);
  if (matrix[y - 1] && matrix[y - 1][x] !== undefined) res.push(matrix[y - 1][x]);
  if (matrix[y - 1] && matrix[y - 1][x + 1] !== undefined && type === 'moore')
    res.push(matrix[y - 1][x + 1]);
  if (matrix[y] && matrix[y][x + 1] !== undefined) res.push(matrix[y][x + 1]);
  if (matrix[y + 1] && matrix[y + 1][x + 1] !== undefined && type === 'moore')
    res.push(matrix[y + 1][x + 1]);
  if (matrix[y + 1] && matrix[y + 1][x] !== undefined) res.push(matrix[y + 1][x]);
  if (matrix[y + 1] && matrix[y + 1][x - 1] !== undefined && type === 'moore')
    res.push(matrix[y + 1][x - 1]);
  return y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length ? res : [];
};
