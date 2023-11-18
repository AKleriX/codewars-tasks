const getChance = (n, x, a) => {
  let p = 1;
  for (let i = 0; i < a; i++) p *= 1 - x / (n - i);
  return Math.round(p * 100) / 100;
};
