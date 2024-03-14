const tennisGamePoints = (score) => {
  const dict = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };
  return score
    .split('-')
    .reduce((s, v) => (dict.hasOwnProperty(v) ? s + dict[v] : v === 'all' ? s * 2 : s), 0);
};
