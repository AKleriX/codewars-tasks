const switchLift = (status, n) => {
  const dist = Object.values(status).map((f) => Math.abs(f - n));
  let res = '';
  if (dist.includes(0)) return res;
  if (n === 1) return Object.entries(status).sort((a, b) => a[1] - b[1])[0][0];
  if ((dist[2] < dist[1] && !(n % 2)) || (dist[2] < dist[0] && n % 2)) return 'C';
  if (!(n % 2)) res += 'B';
  else res += 'A';
  if ((dist[2] === dist[1] && res === 'B') || (dist[2] === dist[0] && res === 'A')) res += 'C';
  return res;
};
