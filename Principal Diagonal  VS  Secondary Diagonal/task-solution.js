function diagonal(matrix) {
  let pSum = 0,
    sSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    pSum += matrix[i][i];
    sSum += matrix[i][matrix.length - i - 1];
  }
  return pSum === sSum ? `Draw!` : `${pSum > sSum ? 'Principal' : 'Secondary'} Diagonal win!`;
}
