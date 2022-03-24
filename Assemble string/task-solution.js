function assembleString(array) {
  if (!array.length) return '';
  let currentStr = '';
  for (let i = 0; i < array[0].length; i++) {
    let currentSymbol = '#';
    for (let j = 0; j < array.length; j++) if (array[j][i] !== '*') currentSymbol = array[j][i];
    currentStr += currentSymbol;
  }
  return currentStr;
}
