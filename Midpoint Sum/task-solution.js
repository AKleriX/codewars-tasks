const midpointSum = function (n) {
  let idx = undefined;
  for (let i = 1; i < n.length - 1; i++)
    if (n.slice(0, i).reduce(getSum) === n.slice(i + 1).reduce(getSum)) {
      idx = i;
      break;
    }
  return idx;
};

const getSum = (sum, n) => sum + n;
