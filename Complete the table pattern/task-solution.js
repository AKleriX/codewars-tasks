function pattern(rows, columns, str) {
  let rowsSep = Array.from({ length: columns + 1 }, () => '+').join('---'),
    charPointer = 0,
    cellsArr = [];
  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= columns; j++) {
      let s = charPointer < str.length ? str[charPointer] : ' ';
      charPointer++;
      row.push(' ' + s + ' ');
    }
    cellsArr.push('|' + row.join('|') + '|');
  }
  return rowsSep + '\n' + cellsArr.join('\n' + rowsSep + '\n') + '\n' + rowsSep;
}
