function getPassword(grid, directions) {
  const movements = {
    left: -1,
    leftT: -1,
    up: -1,
    upT: -1,
    down: 1,
    downT: 1,
    right: 1,
    rightT: 1,
  };
  let pos = [0, 0],
    pass = '';
  for (let i = 0; i < grid.length; i++)
    if (grid[i].includes('x')) {
      pos = [i, grid[i].indexOf('x')];
      break;
    }
  for (let i = 0; i < directions.length; i++) {
    pos[/(left)|(right)/.test(directions[i]) ? 1 : 0] += movements[directions[i]];
    if (/T$/.test(directions[i])) pass += grid[pos[0]][pos[1]];
  }
  return pass;
}
