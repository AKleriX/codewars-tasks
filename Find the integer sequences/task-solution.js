const findSequences = (n) => {
  let result = [];
  for (let length = 2; (length * (length + 1)) / 2 <= n; length++) {
    let start = (n - (length * (length - 1)) / 2) / length;
    if (start === Math.floor(start) && start > 0)
      result.push(Array.from({ length }, (_, i) => start + i));
  }
  return result.sort((a, b) => a.length - b.length);
};
