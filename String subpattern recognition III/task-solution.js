function hasSubpattern(string) {
  let letters = {},
    g = 1;
  for (let i = 0; i < string.length; i++) letters[string[i]] = (letters[string[i]] || 0) + 1;
  g = Object.values(letters).reduce((g, n) => gcd(g, n));
  return Object.keys(letters)
    .map((l) => l.repeat(letters[l] / g))
    .sort()
    .join('');
}

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
