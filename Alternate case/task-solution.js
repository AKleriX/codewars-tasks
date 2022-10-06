function alternateCase(s) {
  let newStr = '';
  for (let i = 0; i < s.length; i++)
    newStr += s[i].toLowerCase() === s[i] ? s[i].toUpperCase() : s[i].toLowerCase();
  return newStr;
}
