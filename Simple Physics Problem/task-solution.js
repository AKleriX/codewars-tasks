const solveIt = (vi, vf, t) => {
  if (vi > vf) return [];
  const a = (vf - vi) / t,
    d = vi * t + 0.5 * a * t ** 2;
  return [+a.toFixed(2), +d.toFixed(2)];
};
