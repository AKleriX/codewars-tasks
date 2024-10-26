const findMaxRange = (arr) => {
  let maxRange = -Infinity;
  const ranges = arr.map((item) => {
    const [from, to] = item.match(/-?\d+(\.\d+)?/g).map(Number),
      range = Math.abs(to - from);
    if (range > maxRange) maxRange = range;
    return { item, range };
  });
  return ranges.filter(({ range }) => range === maxRange).map(({ item }) => item);
};
