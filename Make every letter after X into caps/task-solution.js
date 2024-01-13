const makeEveryLetterAfterXCaps = (str, letter) => {
  let re = new RegExp(letter + '[abcdefghijklmnopqrstuvwxyz]', 'g');
  while (re.test(str)) str = str.replace(re, (p) => p[0] + p[1].toUpperCase());
  return str;
};
