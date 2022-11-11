function bingo(a) {
  return Array.from(new Set(a.map((n) => String.fromCharCode(n + 64)))).filter((l) =>
    /[BGINO]/.test(l),
  ).length === 5
    ? 'WIN'
    : 'LOSE';
}
