function polybius(text) {
  const table = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'IJ', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
  ];
  let cipher = '';
  for (let i = 0; i < text.length; i++) {
    let currentSymbol = text[i];
    for (let j = 0; j < 5; j++)
      for (let k = 0; k < 5; k++)
        if (table[j][k].indexOf(currentSymbol) !== -1)
          currentSymbol = (j + 1).toString() + (k + 1).toString();
    cipher += currentSymbol;
  }
  return cipher;
}
