function zeckendorf(n) {
  if (n < 0) return null;
  let res = [],
    fibs = getFibNums(n);
  for (let i = fibs.length - 1; i > -1; i--)
    if (fibs[i] <= n && n > 0) {
      res.push(fibs[i]);
      n -= fibs[i];
    }
  return res;
}

let getFibNums = (n) => {
  let fibs = [0];
  for (let i = 1; fibs[fibs.length - 1] < n; i++)
    fibs.push(Math.round((1 / 5 ** 0.5) * (((1 + 5 ** 0.5) / 2) ** i - ((1 - 5 ** 0.5) / 2) ** i)));
  return fibs;
};
