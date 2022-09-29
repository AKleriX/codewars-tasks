function triangle(row) {
  const dict = {
    BG: 'R',
    BR: 'G',
    GR: 'B',
  };
  let currentRow = [...row];
  while (currentRow.length > 1) {
    let tmpRow = [];
    for (let i = 1; i < currentRow.length; i++)
      tmpRow.push(
        currentRow[i] === currentRow[i - 1]
          ? currentRow[i]
          : dict[[...(currentRow[i] + currentRow[i - 1])].sort().join('')],
      );
    currentRow = [...tmpRow];
  }
  return currentRow[0];
}
