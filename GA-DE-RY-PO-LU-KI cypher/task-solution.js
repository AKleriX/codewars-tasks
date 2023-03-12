const dict = {
  g: 'a',
  a: 'g',
  d: 'e',
  e: 'd',
  r: 'y',
  y: 'r',
  p: 'o',
  o: 'p',
  l: 'u',
  u: 'l',
  k: 'i',
  i: 'k',
};

function encode(str) {
  const code = [...str].map((s) =>
    dict[s.toLowerCase()]
      ? s.toLowerCase() === s
        ? dict[s.toLowerCase()]
        : dict[s.toLowerCase()].toUpperCase()
      : s,
  );
  return code.join('');
}

function decode(str) {
  return encode(str);
}
