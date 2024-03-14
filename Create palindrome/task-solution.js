const solve = (s) => {
  for (let i = 0; (i < s.length / 2) | 0; i++)
    if (
      (s[i] === 'a' && s[s.length - i - 1] !== 'a' && s[s.length - i - 1] !== 'c') ||
      (s[i] === 'z' && s[s.length - i - 1] !== 'z' && s[s.length - i - 1] !== 'x') ||
      Math.abs(s[i].charCodeAt(0) - s[s.length - i - 1].charCodeAt(0)) > 2 ||
      Math.abs(s[i].charCodeAt(0) - s[s.length - i - 1].charCodeAt(0)) === 1
    )
      return false;
  return true;
};
