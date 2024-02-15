const calculateBricksCount = (width, height) => {
  let c = [0, 0, 0],
    rows = height / 5;
  for (let i = 0; i < rows; i++)
    if ((i + 1) % 3 !== 1) {
      c[2]++;
      c[1]++;
      c[0] += width / 60 - 1;
    } else c[0] += width / 60;
  return c.map((n, i) => (!i ? n + 'L' : n ? n + (i === 1 ? 'M' : 'S') : '')).join('');
};
