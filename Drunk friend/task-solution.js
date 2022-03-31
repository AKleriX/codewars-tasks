function decode(str) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let currectStr = '';
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (/[a-z]/i.test(symbol)) {
      let upperCase = symbol === symbol.toUpperCase();
      symbol = abc[25 - abc.indexOf(symbol.toLowerCase())];
      if (upperCase) symbol = symbol.toUpperCase();
    }
    currectStr += symbol;
  }
  return typeof str === 'string' ? currectStr : 'Input is not a string';
}
