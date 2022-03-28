const matrixfy = (str) => {
  if (str.length === 0) return 'name must be at least one letter';
  let matrix = [],
    matrixLength = Math.ceil(Math.sqrt(str.length)),
    letterPointer = 0;
  for (let i = 0; i < matrixLength; i++) {
    let row = [];
    for (let j = 0; j < matrixLength; j++)
      row.push(letterPointer < str.length ? str[letterPointer++] : '.');
    matrix.push(row);
  }
  return matrix;
};
