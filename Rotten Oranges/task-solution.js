const calcRotTime = (box) => {
  const rows = box.length,
    cols = box[0].length,
    queue = [];
  let fresh = 0;
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      if (box[i][j] === 2) queue.push([i, j]);
      if (box[i][j] === 1) fresh++;
    }
  let time = 0;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (queue.length && fresh > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of dir) {
        const nx = x + dx,
          ny = y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && box[nx][ny] === 1) {
          box[nx][ny] = 2;
          fresh--;
          queue.push([nx, ny]);
        }
      }
    }
    time++;
  }
  return fresh === 0 ? time : -1;
};
