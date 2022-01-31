function diag2Sym(strng) {
  return rot90Counter(strng).map(row => [...row].reverse().join(''));
}
function rot90Counter(strng) {
  let rows = strng.split('\n'),
      rot90Rows = [];
  for (let i = rows.length - 1; i >= 0; i--){
    let row = '';
    for (let j = 0; j < rows.length; j++)
      row += rows[j][i];
    rot90Rows.push(row);
  }
  return rot90Rows;
}
function selfieDiag2Counterclock(strng) {
  let rot90Rows = rot90Counter(strng),
      diag2Rows = diag2Sym(strng),
      rows = strng.split('\n');
  for (let i = 0; i < rows.length; i++)
    rows[i] += '|' + diag2Rows[i] + '|' + rot90Rows[i];
  return rows;
}

function oper(fct, s) {
  return fct(s).join('\n');
}