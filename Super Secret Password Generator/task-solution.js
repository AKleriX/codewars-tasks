//These are your super secret characters you will use to make the password super secure
const superSecretChars = [
  ['a', '@'],
  ['s', '$'],
  ['o', '0'],
  ['h', '5'],
  ['x', '*'],
].reduce((d, a) => ((d[a[0]] = a[1]), d), {});
const createSSP = (password) =>
  [...password].map((s) => superSecretChars[s.toLowerCase()] || s).join('');
