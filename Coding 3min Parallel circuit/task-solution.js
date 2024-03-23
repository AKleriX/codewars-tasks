const resistance = (arr) =>
  +(1 / arr.reduce((s, r) => s + 1 / r.reduce((sum, v) => sum + v, 0), 0)).toFixed(2);
