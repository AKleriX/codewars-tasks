const bombHasBeenPlanted = (m, time) => {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  let ctPos,
    bombPos,
    kitPos = null;

  for (let i = 0; i < m.length; i++)
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === 'CT') ctPos = [i, j];
      if (m[i][j] === 'B') bombPos = [i, j];
      if (m[i][j] === 'K') kitPos = [i, j];
    }

  if (!ctPos || !bombPos) return false;

  const bfs = (start, end) => {
    const queue = [[...start, 0]];
    const visited = new Set();
    visited.add(`${start[0]}-${start[1]}`);

    while (queue.length > 0) {
      const [row, col, dist] = queue.shift();
      if (row === end[0] && col === end[1]) return dist;

      for (const [dx, dy] of directions) {
        const newRow = row + dx,
          newCol = col + dy;
        if (
          newRow >= 0 &&
          newRow < m.length &&
          newCol >= 0 &&
          newCol < m[0].length &&
          m[newRow][newCol] !== 'X' &&
          !visited.has(`${newRow}-${newCol}`)
        ) {
          queue.push([newRow, newCol, dist + 1]);
          visited.add(`${newRow}-${newCol}`);
        }
      }
    }
    return Infinity;
  };

  const distToBomb = bfs(ctPos, bombPos),
    distToKit = kitPos ? bfs(ctPos, kitPos) : Infinity,
    distKitToBomb = kitPos ? bfs(kitPos, bombPos) : Infinity,
    canDefuseWithoutKit = distToBomb + 10 <= time,
    canDefuseWithKit = distToKit + distKitToBomb + 5 <= time;

  return canDefuseWithoutKit || canDefuseWithKit;
};
