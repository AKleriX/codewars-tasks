function theJanitor(word) {
  let letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return letters.map((l) => {
    return word.indexOf(l) > -1 ? word.lastIndexOf(l) - word.indexOf(l) + 1 : 0;
  });
}
