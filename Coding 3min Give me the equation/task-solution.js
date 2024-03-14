const sc = (a, b, c) => {
  [a, b, c] = [a, b, c].sort((a, b) => a - b);
  return a + b === c
    ? `${a}+${b}=${c}`
    : c - b === a
    ? `${c}-${b}=${a}`
    : a * b === c
    ? `${a}*${b}=${c}`
    : c / b === a
    ? `${c}/${b}=${a}`
    : '';
};
