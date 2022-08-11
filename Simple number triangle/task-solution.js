function solve(n) {
  let currentRow = [1n];
  for (let i = 2n; i <= n; i++) {
    let tmpRow = [1n];
    for (let j = 1n; j < i; j++) tmpRow.push((currentRow[j] || 0n) + tmpRow[j - 1n]);
    currentRow = [...tmpRow];
  }
  return currentRow.reduce((sum, n) => sum + n);
}
