const magicSquare = (n) => {
  if (n % 2 === 0 || n < 1) return [];

  const magicSquare = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1,
    row = 0,
    col = Math.floor(n / 2);

  while (num <= n * n) {
    magicSquare[row][col] = num;
    num++;
    let newRow = (row - 1 + n) % n;
    let newCol = (col + 1) % n;

    if (magicSquare[newRow][newCol]) row = (row + 1) % n;
    else {
      row = newRow;
      col = newCol;
    }
  }

  return magicSquare;
};
