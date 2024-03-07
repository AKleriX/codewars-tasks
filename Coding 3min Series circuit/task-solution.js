const voltage = (arr, total) => {
  const res = arr.reduce((s, r) => s + r, 0);
  return arr.map((r) => +((r / res) * total).toFixed(2));
};
