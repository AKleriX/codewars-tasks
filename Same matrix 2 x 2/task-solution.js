const rotate90 = (matrix) => [matrix[2], matrix[0], matrix[3], matrix[1]];

const rotate180 = (matrix) => [matrix[3], matrix[2], matrix[1], matrix[0]];

const rotate270 = (matrix) => [matrix[1], matrix[3], matrix[0], matrix[2]];

const areSame = (matrix1, matrix2) => {
  return (
    JSON.stringify(matrix1) === JSON.stringify(matrix2) ||
    JSON.stringify(matrix1) === JSON.stringify(rotate90(matrix2)) ||
    JSON.stringify(matrix1) === JSON.stringify(rotate180(matrix2)) ||
    JSON.stringify(matrix1) === JSON.stringify(rotate270(matrix2))
  );
};

const countDifferentMatrices = (matrices) => {
  let uniqueMatrices = [];

  for (let matrix of matrices)
    if (!uniqueMatrices.some((m) => areSame(m, matrix))) uniqueMatrices.push(matrix);

  return uniqueMatrices.length;
};
