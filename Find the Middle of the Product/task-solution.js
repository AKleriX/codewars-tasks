function findMiddle(str) {
  if (typeof str !== 'string' || !/\d/.test(str)) return -1;
  let pStr = str
    .match(/\d/g)
    .reduce((p, n) => p * n)
    .toString();
  return pStr.length % 2
    ? +pStr.slice(Math.floor(pStr.length / 2), Math.ceil(pStr.length / 2))
    : +pStr.slice(pStr.length / 2 - 1, pStr.length / 2 + 1);
}
