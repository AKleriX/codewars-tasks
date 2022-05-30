function rotateClockwise(matrix) {
  let rotMatrix = [];
  if (!matrix.length || !matrix[0].length) return rotMatrix;
  for (let i = 0; i < matrix[0].length; i++) {
    let row = '';
    for (let j = matrix.length - 1; j >= 0; j--) row += matrix[j][i];
    rotMatrix.push(row);
  }
  return rotMatrix;
}
