const maxlen = (l1, l2) => {
  const max = Math.max(l1, l2),
    min = Math.min(l1, l2);
  return max / 3 > min ? max / 3 : max - min > min ? min : max / 2;
};
