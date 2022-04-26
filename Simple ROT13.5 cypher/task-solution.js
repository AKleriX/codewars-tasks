function ROT135(input) {
  let rotStr = '';
  for (let i = 0; i < input.length; i++) {
    let symbol = input[i];
    if (/[a-z]/i.test(symbol)) {
      let caseCoef = symbol === symbol.toUpperCase() ? 65 : 97;
      symbol = String.fromCharCode(((symbol.charCodeAt() - caseCoef + 13) % 26) + caseCoef);
    } else if (/\d/.test(symbol)) symbol = ((+symbol + 5) % 10).toString();
    rotStr += symbol;
  }
  return rotStr;
}
