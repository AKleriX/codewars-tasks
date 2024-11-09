const digitDifferenceSort = (a) => {
  return a
    .map((num, idx) => {
      const digits = String(num).split('').map(Number),
        diff = Math.max(...digits) - Math.min(...digits);
      return { num, diff, idx };
    })
    .sort((a, b) => a.diff - b.diff || b.idx - a.idx)
    .map((item) => item.num);
};
