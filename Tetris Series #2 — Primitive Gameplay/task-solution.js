const tetris = (a) => {
  let grid = Array(9).fill(0);
  let min = 0,
    max = 0;

  for (const command of a) {
    const [blockType, direction, offset] = [parseInt(command[0]), command[1], parseInt(command[2])];
    const pos = 4 + (direction === 'L' ? -offset : offset);

    grid[pos] += blockType;
    min = Math.min(...grid);
    max = Math.max(...grid);

    if (max - min >= 30) break;
  }

  return min;
};
