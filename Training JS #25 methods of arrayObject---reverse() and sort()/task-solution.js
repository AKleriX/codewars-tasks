const sortIt = (arr) => {
  const counter = arr.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {});
  return [...arr].sort((a, b) => (counter[a] === counter[b] ? b - a : counter[a] - counter[b]));
};
