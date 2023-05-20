const averageLength = (arr) => {
  let aLength = Math.round(arr.reduce((s, n) => s + n.length, 0) / arr.length);
  return arr.map((s) => s[0].repeat(aLength));
};
