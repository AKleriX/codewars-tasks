function transpose(matrix) {
  let transpMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) row.push(matrix[j][i]);
    transpMatrix.push(row);
  }
  return transpMatrix;
}
