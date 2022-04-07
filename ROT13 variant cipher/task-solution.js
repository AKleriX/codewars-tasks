function encrypter(string) {
  return replaceOpposite(rot13(string));
}

const rot13 = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (/[a-z]/.test(symbol))
      symbol = String.fromCharCode(((symbol.charCodeAt(0) - 97 + 13) % 26) + 97);
    newStr += symbol;
  }
  return newStr;
};

const replaceOpposite = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (/[a-z]/.test(symbol)) symbol = String.fromCharCode(25 - (symbol.charCodeAt(0) - 97) + 97);
    newStr += symbol;
  }
  return newStr;
};
