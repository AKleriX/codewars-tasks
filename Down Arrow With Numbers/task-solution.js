const getADownArrowOf = (n) => {
  let rows = [];
  for (let i = 0; i < n; i++) {
    const r = Array.from({ length: n - i }, (_, i) => (i + 1) % 10);
    rows.push(' '.repeat(i) + r.join('') + r.reverse().slice(1).join(''));
  }
  return rows.join('\n');
};
