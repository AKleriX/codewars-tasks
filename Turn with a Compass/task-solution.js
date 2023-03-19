function direction(facing, turn) {
  const dir = {
      N: 0,
      NE: 45,
      E: 90,
      SE: 135,
      S: 180,
      SW: 225,
      W: 270,
      NW: 315,
    },
    deg = {
      0: 'N',
      45: 'NE',
      90: 'E',
      135: 'SE',
      180: 'S',
      225: 'SW',
      270: 'W',
      315: 'NW',
    };
  let currentDeg = dir[facing] + (turn % 360);
  return currentDeg < 0
    ? deg[360 + currentDeg]
    : currentDeg >= 360
    ? deg[currentDeg - 360]
    : deg[currentDeg];
}
