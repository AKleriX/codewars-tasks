const canEscape = (walls) => {
  for (let i = 0; i < walls.length; i++)
    if (walls[i][0] - i - 1 <= 0 || walls[i][1] - i - 1 <= 0) return false;
  return true;
};
