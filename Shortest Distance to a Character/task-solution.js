function shortesttoChar(s, c) {
  let indexs = [...s].reduce((idxs, l, i) => (l === c ? (idxs.push(i), idxs) : idxs), []),
    bestDist = [];
  if (!indexs.length) return [];
  for (let i = 0; i < s.length; i++) {
    let dists = indexs.map((idx) => Math.abs(i - idx));
    bestDist.push(Math.min.apply(null, dists));
  }
  return bestDist;
}
