const makeSequences = (n) => {
  const counter = [1];
  for (let i = 0; i < n; i++)
    counter.push((i + 1) % 2 ? counter[i] : counter[(i + 1) / 2] + counter[i]);
  return counter.slice(-1)[0];
};
