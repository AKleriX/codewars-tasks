function convert(s) {
  if (!s.length) return 0;
  let strCode = '',
    usedLetters = [];
  for (let i = 0; i < s.length; i++) {
    if (!usedLetters.includes(s[i].toLowerCase())) {
      if (usedLetters.length === 0) usedLetters[1] = s[i].toLowerCase();
      else if (!usedLetters[0]) usedLetters[0] = s[i].toLowerCase();
      else usedLetters.push(s[i].toLowerCase());
    }
    strCode += usedLetters.indexOf(s[i].toLowerCase());
  }
  return Number(strCode);
}
