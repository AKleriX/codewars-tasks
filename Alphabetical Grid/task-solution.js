function grid(N) {
  if (N < 0) return null;
  let abc = 'abcdefghijklmnopqrstuvwxyz'.repeat(Math.round(N / 2)),
    rows = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = i; j < i + N; j++) row.push(abc[j]);
    rows.push(row.join(' '));
  }
  return rows.join('\n');
}
