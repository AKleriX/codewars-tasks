function nthPerm(n, d) {
  let seq = Array.from({ length: d }, (_, i) => i);
  while (n > 1) {
    let pos = d - 2,
      k = d - 1;
    while (pos !== -1 && seq[pos] >= seq[pos + 1]) pos--;
    while (seq[pos] >= seq[k]) k--;
    [seq[pos], seq[k]] = [seq[k], seq[pos]];
    let l = pos + 1,
      r = d - 1;
    while (l < r) {
      [seq[l], seq[r]] = [seq[r], seq[l]];
      l++;
      r--;
    }
    n--;
  }
  return seq.join('');
}
