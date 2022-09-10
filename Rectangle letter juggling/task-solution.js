function cipherText(plainText) {
  let currentText = plainText.toLowerCase().replace(/[^a-z]/g, ''),
    a,
    b,
    rows = [];
  if (!Math.sqrt(currentText.length) % 1) a = b = Math.sqrt(currentText.length);
  else {
    a = Math.floor(Math.sqrt(currentText.length));
    b = Math.ceil(Math.sqrt(currentText.length));
  }
  for (let i = 0; i < currentText.length; i += b) {
    let row = currentText.slice(i, i + b);
    rows.push(row + ' '.repeat(b - row.length));
  }
  return rows.length ? [...rows[0]].map((_, i) => rows.map((r) => r[i]).join('')).join(' ') : '';
}
