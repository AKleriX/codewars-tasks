function gridIndex(grid, indices) {
  let res = '';
  for (let i = 0; i < indices.length; i++)
    res += grid[((indices[i] - 1) / grid[0].length) | 0][(indices[i] - 1) % grid[0].length];
  return res;
}
