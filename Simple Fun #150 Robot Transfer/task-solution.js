const robotTransfer = (matrix, k) => {
  let count = 0;

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++) {
      let visited = new Set(),
        steps = k,
        x = i,
        y = j;

      while (steps) {
        [x, y] = matrix[x][y].split(',').map(Number);
        steps--;

        if ((x === i && y === j) || visited.has(`${x},${y}`)) break;

        visited.add(`${x},${y}`);
      }

      if (x === i && y === j && steps === 0) count++;
    }

  return count;
};
