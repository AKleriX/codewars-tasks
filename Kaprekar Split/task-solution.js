const kaprekarSplit = (n) => {
  let sq = (n ** 2).toString(),
    pos = -1;
  for (let i = 0; i < sq.length; i++)
    if (+sq.slice(0, i) + +sq.slice(i) === n) {
      pos = i;
      break;
    }
  return pos;
};
