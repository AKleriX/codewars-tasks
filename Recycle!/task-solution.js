const recycleMe = (recycle) =>
  recycle.reduce((b, v) => (b[v > 0 ? 0 : v < 0 ? 1 : 2]++, b), [0, 0, 0]);
