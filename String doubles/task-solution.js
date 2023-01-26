function doubles(s) {
  let currentStr = s + '';
  while (/(.)\1/.test(currentStr)) currentStr = currentStr.replace(/(.)\1/g, '');
  return currentStr;
}
