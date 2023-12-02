const possiblePositions = (str) => {
  const res = [],
    [x, y] = [...str].map((p, i) => (!i ? p.charCodeAt(0) - 96 : +p));
  res.push(
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y - 2],
  );
  return res
    .filter((a) => a[0] > 0 && a[0] < 9 && a[1] > 0 && a[1] < 9)
    .map((a) => String.fromCharCode(a[0] + 96) + a[1])
    .sort();
};
