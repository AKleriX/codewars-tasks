const calcDistance = (path) => {
  let distance = 0;
  for (let i = 1; i < path.length; i++) {
    const [x1, y1, z1] = path[i - 1],
      [x2, y2, z2] = path[i],
      dx = Math.abs(x2 - x1),
      dy = Math.abs(y2 - y1),
      dz = Math.abs(z2 - z1);
    distance += Math.max(dx, dy, dz) * 5;
  }
  return distance;
};
