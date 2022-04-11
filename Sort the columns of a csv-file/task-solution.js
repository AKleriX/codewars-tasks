function sortCsvColumns(csvFileContent) {
  let rows = csvFileContent.split('\n').map((r) => r.split(';')),
    cols = changeColsAndRows(rows);
  cols.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));
  rows = changeColsAndRows(cols);
  return rows.map((r) => r.join(';')).join('\n');
}

const changeColsAndRows = (table) => {
  let tb = [];
  for (let i = 0; i < table[0].length; i++) {
    let t = [];
    for (let j = 1; j < table.length; j++) t.push(table[j][i]);
    tb.push([table[0][i], ...t]);
  }
  return tb;
};
