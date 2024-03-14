const beasts = (heads, tails) => {
  const h = (heads - tails * 2) / 3;
  return tails - h >= 0 && h >= 0 ? [tails - h, h] : 'No solutions';
};
