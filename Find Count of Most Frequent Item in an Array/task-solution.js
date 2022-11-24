const mostFrequentItemCount = (arr) => {
  let counter = arr.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), { null: 0 });
  return Math.max.apply(Math, Object.values(counter));
};
