function perimeter(n) {
  let fibSeq = [1, 1];
  for (let i = 2; i <= n; i++)
    fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
  return 4 * fibSeq.slice(0, n + 1).reduce((sum, n) => sum + n, 0);
}