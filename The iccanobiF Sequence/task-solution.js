const iccanobif = (n) => {
  let seq = [1, 1];
  for (let i = 3; i <= n; i++) seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq.slice(0, n).reverse();
};
