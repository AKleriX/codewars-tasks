solution = (f1, f2, t) => {
  const tRad = getRad(t),
    f2x = f2 * Math.cos(tRad),
    f2y = f2 * Math.sin(tRad),
    rx = f1 + f2x,
    ry = f2y;
  return [Math.sqrt(rx ** 2 + ry ** 2), getDeg(Math.atan2(ry, rx))];
};

const getRad = (d) => (d * Math.PI) / 180;

const getDeg = (r) => (r * 180) / Math.PI;
