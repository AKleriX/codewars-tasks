const surface_area = (matrix) => {
  let n = matrix.length,
    area = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      let h = matrix[i][j];
      if (h > 0) area += 2 + 4 * h;
      if (i > 0) area -= 2 * Math.min(h, matrix[i - 1][j]);
      if (j > 0) area -= 2 * Math.min(h, matrix[i][j - 1]);
    }
  return area;
};
