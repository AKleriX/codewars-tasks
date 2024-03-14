const makeLatinSquare = (n) => {
  let currentRow = Array.from({ length: n }, (_, i) => i + 1);
  return Array.from({ length: n }, (_, i) => currentRow.slice(i).concat(currentRow.slice(0, i)));
};
