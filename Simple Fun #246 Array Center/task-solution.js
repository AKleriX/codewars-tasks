const arrayCenter = (a) => {
  const avg = a.reduce((s, n) => s + n, 0) / a.length,
    min = Math.min(...a);
  return a.filter((n) => Math.abs(n - avg) < min);
};
