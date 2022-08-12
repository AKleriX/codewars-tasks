function blocksToCollect(level) {
  let blocks = ['gold', 'diamond', 'emerald', 'iron'],
    counter = {
      total: 0,
      gold: 0,
      diamond: 0,
      emerald: 0,
      iron: 0,
    },
    line = 3;
  for (let i = 0; i < level; i++) {
    counter.total += line ** 2;
    counter[blocks[i % 4]] += line ** 2;
    line += 2;
  }
  return counter;
}
