L = (n, L0, L1, add) => {
  let seq = [L0, L1];
  for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2] + add);
  return seq;
};
