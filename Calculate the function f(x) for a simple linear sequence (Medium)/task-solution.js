function getFunction(sequence) {
  let n = sequence[1] - sequence[0],
    m = sequence[0];
  for (let i = 2; i < sequence.length; i++)
    if (sequence[i] - sequence[i - 1] !== n) return 'Non-linear sequence';
  return function (x) {
    return n * x + m;
  };
}
