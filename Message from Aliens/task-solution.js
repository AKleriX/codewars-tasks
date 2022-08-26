function decode(m) {
  const dic = {
    '/\\': 'a',
    ']3': 'b',
    '(': 'c',
    '|)': 'd',
    '[-': 'e',
    '/=': 'f',
    '(_,': 'g',
    '|-|': 'h',
    '|': 'i',
    _T: 'j',
    '/<': 'k',
    '|_': 'l',
    '|\\/|': 'm',
    '|\\|': 'n',
    '()': 'o',
    '|^': 'p',
    '()_': 'q',
    '/?': 'r',
    '_\\~': 's',
    '~|~': 't',
    '|_|': 'u',
    '\\/': 'v',
    '\\/\\/': 'w',
    '><': 'x',
    '`/': 'y',
    '~/_': 'z',
    __: ' ',
  };
  let sep = m.slice(-1),
    letters = m
      .split(sep)
      .reverse()
      .filter((s) => s.length);
  return letters.map((s) => dic[s]).join('');
}
