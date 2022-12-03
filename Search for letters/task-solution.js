function change(string) {
  let counter = new Array(26).fill(0),
    strLow = string.toLowerCase();
  for (let i = 0; i < strLow.length; i++)
    if (/[a-z]/.test(strLow[i])) counter[strLow[i].charCodeAt(0) - 97] = 1;
  return counter.join('');
}
