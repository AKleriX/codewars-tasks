const tripleShiftian = (base, n) => {
  let currentSeq = [...base];
  for (let i = 3; i <= n; i++)
    currentSeq.push(4 * currentSeq[i - 1] - 5 * currentSeq[i - 2] + 3 * currentSeq[i - 3]);
  return currentSeq[n];
};
