const closingInSum = (n) => {
  const nStr = n.toString(),
    pairs = [];
  for (let i = 0; (i < nStr.length / 2) | 0; i++) pairs.push(nStr[i] + nStr[nStr.length - 1 - i]);
  if (nStr.length % 2) pairs[pairs.length - 1] = nStr[(nStr.length / 2) | 0];
  return pairs.reduce((s, num) => s + +num, 0);
};
