function geometricSequenceElements(a, r, n) {
  let seq = [];
  for (let i = 0, num = a; i < n; i++, num *= r) seq.push(num);
  return seq.join(', ');
}
