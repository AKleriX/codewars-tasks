const isPerfectCube = (num) => {
  const cubeRoot = Math.cbrt(num);
  return Number.isInteger(cubeRoot);
};

const luckySevens = (matrix) => {
  let count = 0;

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 7) {
        let sum = 0;
        if (i > 0 && typeof matrix[i - 1][j] === 'number') sum += matrix[i - 1][j];
        if (i < matrix.length - 1 && typeof matrix[i + 1][j] === 'number') sum += matrix[i + 1][j];
        if (j > 0 && typeof matrix[i][j - 1] === 'number') sum += matrix[i][j - 1];
        if (j < matrix[i].length - 1 && typeof matrix[i][j + 1] === 'number')
          sum += matrix[i][j + 1];
        if (isPerfectCube(sum)) count += 1;
      }

  return count;
};
