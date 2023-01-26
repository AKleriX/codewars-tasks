function solve(s, k) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let letterPos = 0,
    currentStr = s + '';
  while (k--) {
    while (currentStr.indexOf(abc[letterPos]) < 0 && letterPos < 26) letterPos++;
    currentStr = currentStr.replace(new RegExp(abc[letterPos]), '');
  }
  return currentStr;
}
