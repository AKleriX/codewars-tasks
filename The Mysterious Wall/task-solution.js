const buildAWall = (x, y) => {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1) return null;
  if (x * y > 10000) return "Naah, too much...here's my resignation.";

  const fullBrick = '■■',
    halfBrick = '■',
    mortar = '|',
    rows = [];

  for (let i = 0; i < x; i++) {
    const isOffset = i % 2 === 1;
    if (!isOffset) {
      const row = Array(y).fill(fullBrick).join(mortar);
      rows.unshift(row);
    } else if (y === 1) rows.unshift(halfBrick + mortar + halfBrick);
    else {
      const middle = Array(y - 1)
          .fill(fullBrick)
          .join(mortar),
        row = halfBrick + mortar + middle + mortar + halfBrick;
      rows.unshift(row);
    }
  }

  return rows.join('\n');
};
