const minimalSubtractor = (n) => {
  for (let i = 0; i < n - 1; i++) for (let j = n; j > 0; j = (j - i) / 2) if (j === 1) return i;
};
