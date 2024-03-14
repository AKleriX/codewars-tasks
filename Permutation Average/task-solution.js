const permutationAverage = (n) => {
  let d = [...n.toString()],
    sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += +d.join('');
    d = [d[d.length - 1], ...d.slice(0, -1)];
  }
  return Math.round(sum / d.length);
};
