function validParentheses(parenStr) {
  let counter = 0;
  for (let i = 0; i < parenStr.length; i++) {
    if (/\)/.test(parenStr[i])) counter--;
    else counter++;
    if (counter < 0) return false;
  }
  return counter === 0;
}
