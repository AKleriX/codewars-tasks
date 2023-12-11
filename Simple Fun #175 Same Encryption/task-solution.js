const sameEncryption = (s1, s2) =>
  s1[0] + getADigit(s1.length - 2) + s1.slice(-1) ===
  s2[0] + getADigit(s2.length - 2) + s2.slice(-1);

const getADigit = (n) => (n > 9 ? getADigit([...n.toString()].reduce((s, d) => s + +d, 0)) : n);
