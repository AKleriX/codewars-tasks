const solution = (s, t) => {
  let d = s * t,
    maxSpr = Math.ceil(t / 2);

  for (let i = 0; i < maxSpr; i++) if (s - 3 * i > 0) d += s - 3 * i;

  return d;
};
