const minAndMax = (l, d, x) => {
  let min = 100001,
    max = 0;
  for (let i = l; i <= d; i++) {
    let sum = [...i.toString()].reduce((s, d) => s + +d, 0);
    if (sum === x && i < min) min = i;
    if (sum === x && i > max) max = i;
  }
  return [min, max];
};
