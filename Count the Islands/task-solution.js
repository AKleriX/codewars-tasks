const countIslands = (image) => {
  if (!image || image.length === 0) return 0;

  const rows = image.length,
    cols = image[0].length;

  let counter = 0;

  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || image[i][j] === 0) return null;
    image[i][j] = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j + 1);
    dfs(i - 1, j - 1);
    dfs(i + 1, j - 1);
    dfs(i - 1, j + 1);
  };

  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (image[i][j] === 1) {
        counter++;
        dfs(i, j);
      }

  return counter;
};
