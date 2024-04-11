const recaman = (n) => {
  const seq = [0];
  while (seq.length <= n) {
    let v = seq[seq.length - 1] - seq.length;
    if (v >= 0 && !seq.includes(v)) seq.push(v);
    else seq.push(seq[seq.length - 1] + seq.length);
  }
  return seq.pop();
};
