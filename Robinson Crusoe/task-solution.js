const crusoe = (n, d, ang, distmult, angmult) => {
  let x = 0,
    y = 0;
  for (let i = 0; i < n; i++) {
    x += d * Math.cos(ang * (Math.PI / 180));
    y += d * Math.sin(ang * (Math.PI / 180));
    d *= distmult;
    ang *= angmult;
  }
  return [x, y];
};
