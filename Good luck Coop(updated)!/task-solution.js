const findSafeRoute = (board, directions) => {
  let len = directions.length;

  for (let i = 0; i < board.length; i++)
    if (board[i].slice(0, len) === directions) return `Horizontal ${i + 1}`;

  for (let j = 0; j < board.length; j++) {
    let vertical = board.map((row) => row[j]).join('');
    if (vertical.slice(0, len) === directions) return `Vertical ${j + 1}`;
  }

  return "Coop, it's too risky!";
};
