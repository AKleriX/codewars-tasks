function noRepeat(str) {
  let noRepLet = '',
    prevLetters = new Set();
  for (let i = 0; i < str.length; i++)
    if (!prevLetters.has(str[i]) && i === str.lastIndexOf(str[i])) {
      noRepLet = str[i];
      break;
    } else prevLetters.add(str[i]);
  return noRepLet;
}
