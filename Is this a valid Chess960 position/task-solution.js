const isValidChess960 = (pieces) =>
  pieces.indexOf('R') < pieces.indexOf('K') &&
  pieces.lastIndexOf('R') > pieces.indexOf('K') &&
  (pieces.lastIndexOf('B') - pieces.indexOf('B')) % 2 === 1;
