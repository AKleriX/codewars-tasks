const sixColumnEncryption = (msg) => {
  const currentMsg = msg.replace(/ /g, '.'),
    cols = 6,
    rows = Math.ceil(currentMsg.length / cols);

  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let row = currentMsg.slice(i * cols, i * cols + cols);
    if (row.length < cols) row = row.padEnd(cols, '.');
    matrix.push(row);
  }

  let encryptedMessageArray = [];
  for (let col = 0; col < cols; col++) {
    let encryptedColumn = '';
    for (let row = 0; row < rows; row++) encryptedColumn += matrix[row][col];
    encryptedMessageArray.push(encryptedColumn);
  }

  return encryptedMessageArray.join(' ');
};
