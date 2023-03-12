const dict: { [key: string]: string } = {
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

export function encode(str: string): string {
  const code = [...str].map((s) =>
    dict[s.toLowerCase()]
      ? s.toLowerCase() === s
        ? dict[s.toLowerCase()]
        : dict[s.toLowerCase()].toUpperCase()
      : s,
  );
  return code.join('');
}

export function decode(str: string): string {
  return encode(str);
}
