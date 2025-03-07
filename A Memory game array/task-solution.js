const createTiles = (n) => {
  if (n === 0 || n % 2 !== 0) return [];
  const pairs = [];
  for (let i = 1; i <= n / 2; i++) pairs.push(i, i);
  return pairs.sort(() => Math.random() - 0.5);
};
