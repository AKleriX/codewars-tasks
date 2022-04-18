const minDot = function (a, b) {
  let sortA = [...a].sort((a, b) => a - b),
    sortB = [...b].sort((a, b) => b - a);
  return sortA.reduce((sum, n, i) => sum + n * sortB[i], 0);
};
