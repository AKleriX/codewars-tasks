function skiponacci(n) {
  let seq = [0, 1];
  for (let i = 2; i <= n; i++) seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq
    .slice(1)
    .map((num, i) => (i % 2 ? 'skip' : num))
    .join(' ');
}
