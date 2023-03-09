function uglifyWord(s) {
  let f = true,
    newStr = '';
  for (let i = 0; i < s.length; i++)
    if (/[a-z]/i.test(s[i])) {
      newStr += f ? s[i].toUpperCase() : s[i].toLowerCase();
      f = !f;
    } else {
      newStr += s[i];
      f = true;
    }
  return newStr;
}
