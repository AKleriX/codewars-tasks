const groupInts = (xs, x) => {
  if (xs.length === 0) return [];

  const res = [];
  let g = [xs[0]];

  for (let i = 1; i < xs.length; i++)
    if (xs[i] >= x === xs[i - 1] >= x) g.push(xs[i]);
    else {
      res.push(g);
      g = [xs[i]];
    }

  res.push(g);

  return res;
};
