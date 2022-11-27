const orderFood = (list) =>
  list.reduce((c, data) => ((c[data.meal] = (c[data.meal] || 0) + 1), c), {});
