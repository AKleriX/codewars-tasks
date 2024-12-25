const countDeafRats = (square) => {
  const directions = {
      '←': [-1, 0],
      '↑': [0, -1],
      '→': [1, 0],
      '↓': [0, 1],
      '↖': [-1, -1],
      '↗': [1, -1],
      '↘': [1, 1],
      '↙': [-1, 1],
    },
    rats = [];

  let piperPos = null;

  for (let y = 0; y < square.length; y++)
    for (let x = 0; x < square[y].length; x++) {
      const cell = square[y][x];
      if (cell === 'P') piperPos = [x, y];
      if (directions[cell]) rats.push({ pos: [x, y], dir: directions[cell] });
    }

  if (!piperPos) throw new Error('Pied Piper not found');

  let deafRats = 0;

  rats.forEach(({ pos, dir }) => {
    const [x, y] = pos;
    const [dx, dy] = dir;
    const initialDistance = Math.sqrt((x - piperPos[0]) ** 2 + (y - piperPos[1]) ** 2);
    const newPos = [x + dx, y + dy];
    const newDistance = Math.sqrt((newPos[0] - piperPos[0]) ** 2 + (newPos[1] - piperPos[1]) ** 2);
    if (newDistance > initialDistance) deafRats++;
  });

  return deafRats;
};
