const sctc = (sin) => {
  const res = [sin];
  res.push(Math.sqrt(1 - sin ** 2));
  if (res[1]) res.push(res[0] / res[1]);
  if (res[0]) res.push(res[1] / res[0]);
  return res.map((v) => +v.toFixed(2));
};
