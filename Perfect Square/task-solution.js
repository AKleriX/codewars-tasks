function perfectSquare(string) {
  let rows = string.split('\n');
  for (let i = 0; i < rows.length; i++)
    if (/[^.]/.test(rows[i]) || rows[i].length !== rows.length) return false;
  return true;
}
