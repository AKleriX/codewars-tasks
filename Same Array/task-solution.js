function same(aArr, bArr) {
  let sortA = aArr
      .map((a) => [...a].sort((a, b) => a - b))
      .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])),
    sortB = bArr
      .map((a) => [...a].sort((a, b) => a - b))
      .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  if (sortA.length !== sortB.length) return false;
  for (let i = 0; i < sortA.length; i++)
    if (sortA[i][0] !== sortB[i][0] || sortA[i][1] !== sortB[i][1]) return false;
  return true;
}
