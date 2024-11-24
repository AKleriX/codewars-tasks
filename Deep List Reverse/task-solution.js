const deepReverse = (l) => {
  return [...l].reverse().map((item) => (Array.isArray(item) ? deepReverse(item) : item));
};
