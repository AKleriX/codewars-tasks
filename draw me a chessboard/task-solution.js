function chessBoard(rows, columns) {
  let board = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) row.push(i % 2 === j % 2 ? 'O' : 'X');
    board.push(row);
  }
  return board;
}
