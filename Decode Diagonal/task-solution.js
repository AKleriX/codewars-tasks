function getDiagonalCode(grid) {
  let dir = 1,
    arr = grid.split('\n').map((row) => row.split(' ')),
    msg = '',
    i = 0,
    j = 0;
  while (arr[i] && arr[i][j]) {
    msg += arr[i][j];
    j++;
    if (!arr[i + dir]) dir *= -1;
    i += dir;
  }
  return msg;
}
