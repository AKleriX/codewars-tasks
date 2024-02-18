const buildTableText = (row, column, character) => {
  const arr = Array.from({ length: 4 }, (_, i) =>
    Array.from({ length: 4 }, (_, j) => (i === row && j === column ? character : ' ')),
  );
  return (
    '-'.repeat(9) +
    '\n' +
    arr.map((a) => '|' + a.join('|') + '|').join('\n' + '-'.repeat(9) + '\n') +
    '\n' +
    '-'.repeat(9) +
    '\n'
  );
};
