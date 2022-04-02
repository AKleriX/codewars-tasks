const encode = (str, key) => recoding(str, key);

const decode = (str, key) => recoding(str, key);

const recoding = (str, key) => {
  let table = {},
    currentStr = '';
  for (let i = 0; i < key.length; i += 2) {
    table[key[i]] = key[i + 1];
    table[key[i + 1]] = key[i];
  }
  for (let i = 0; i < str.length; i++) {
    let upperCase = str[i] === str[i].toUpperCase(),
      currentSymbol = str[i];
    if (table.hasOwnProperty(currentSymbol.toLowerCase()))
      currentSymbol = table[currentSymbol.toLowerCase()];
    currentStr += upperCase ? currentSymbol.toUpperCase() : currentSymbol;
  }
  return currentStr;
};
