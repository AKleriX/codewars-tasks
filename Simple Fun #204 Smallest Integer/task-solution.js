const smallestInteger = (matrix) => {
  let nums = new Set(Array.from({ length: matrix.length * matrix[0].length + 1 }, (_, i) => i));
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) nums.delete(matrix[i][j]);
  return Array.from(nums)[0];
};
