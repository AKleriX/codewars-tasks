function rotateAgainstClockwise(matrix, times) {
  let rotMatrix = [...matrix];
  times %= 4;
  for (let i = 1; i <= times; i++) {
    let newRotMatrix = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      let row = [];
      for (let k = 0; k < matrix.length; k++) row.push(rotMatrix[k][j]);
      newRotMatrix.push(row);
    }
    rotMatrix = newRotMatrix;
  }
  return rotMatrix;
}
