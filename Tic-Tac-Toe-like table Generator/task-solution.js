function displayBoard(board, width) {
  let table = [];
  for (let i = 0; i < board.length / width; i++) {
    let row = [];
    for (let j = width * i; j < width * i + width; j++) row.push(' ' + board[j] + ' ');
    table.push(row.join('|'));
    table.push('-'.repeat(3 * width + width - 1));
  }
  return table.slice(0, -1).join('\n');
}
