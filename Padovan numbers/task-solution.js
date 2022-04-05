function padovan(n) {
  let padSeq = [1, 1, 1];
  for (let i = 3; i <= n; i++) padSeq.push(padSeq[i - 2] + padSeq[i - 3]);
  return padSeq[n];
}
