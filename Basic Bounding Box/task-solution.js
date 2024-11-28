const boundingBox = (imageArray) => {
  const rows = imageArray.length;
  if (rows === 0) return [];
  const cols = imageArray[0].length;
  let top = rows,
    bottom = -1,
    left = cols,
    right = -1;

  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (imageArray[i][j] === 1) {
        top = Math.min(top, i);
        bottom = Math.max(bottom, i);
        left = Math.min(left, j);
        right = Math.max(right, j);
      }

  if (top > bottom || left > right) return imageArray.map((row) => row.map(() => 0));

  const result = imageArray.map((row) => row.map(() => 0));

  for (let j = left; j <= right; j++) {
    result[top][j] = 1;
    result[bottom][j] = 1;
  }

  for (let i = top; i <= bottom; i++) {
    result[i][left] = 1;
    result[i][right] = 1;
  }

  return result;
};
