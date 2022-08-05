function levenshtein(a, b) {
  let mtx = Array.from({ length: a.length + 1 }, () =>
    Array.from({ length: b.length + 1 }, () => 0),
  );
  for (let i = 1; i < a.length + 1; i++) mtx[i][0] = i;
  for (let j = 1; j < b.length + 1; j++) mtx[0][j] = j;
  for (let i = 1; i < a.length + 1; i++)
    for (let j = 1; j < b.length + 1; j++) {
      let subCost = a[i - 1] === b[j - 1] ? 0 : 1;
      mtx[i][j] = Math.min(mtx[i - 1][j] + 1, mtx[i][j - 1] + 1, mtx[i - 1][j - 1] + subCost);
    }
  return mtx[a.length][b.length];
}
