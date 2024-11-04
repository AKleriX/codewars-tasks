const findX = (m) => {
  let [x, y] = [Math.floor(m.length / 2), Math.floor(m[0].length / 2)];
  const visited = new Set();
  while (true) {
    if (m[x][y] === 'X') return [x, y];
    if (visited.has(`${x},${y}`)) return null;
    visited.add(`${x},${y}`);
    const [dir, ...steps] = m[x][y],
      step = parseInt(steps.join(''));
    if (dir === 'N') x -= step;
    else if (dir === 'S') x += step;
    else if (dir === 'E') y += step;
    else if (dir === 'W') y -= step;

    if (x < 0 || y < 0 || x >= m.length || y >= m[0].length) return null;
  }
};
