function vowelBack(s) {
  let newStr = '';
  for (let i = 0; i < s.length; i++) {
    let newSymbol = '';
    if (/[auioe]/.test(s[i])) {
      newSymbol = s[i].charCodeAt() - (s[i] === 'o' ? 1 : s[i] === 'e' ? 4 : 5);
      if (newSymbol < 97) newSymbol += 26;
      newSymbol = String.fromCharCode(newSymbol);
    } else {
      newSymbol = s[i].charCodeAt() + (s[i] === 'c' ? -1 : s[i] === 'd' ? -3 : 9);
      if (newSymbol > 122) newSymbol -= 26;
      newSymbol = String.fromCharCode(newSymbol);
    }
    if (/[code]/.test(newSymbol)) newSymbol = s[i];
    newStr += newSymbol;
  }
  return newStr;
}
