function longestSubstringOf(s) {
  let leftBorder = 0,
    max = 0,
    symbols = new Set();
  for (let i = 0; i < s.length; i++) {
    let size = symbols.size;
    symbols.add(s[i]);
    if (size === symbols.size) {
      leftBorder += Array.from(symbols).indexOf(s[i]) + 1;
      symbols = new Set(s.slice(leftBorder, i + 1));
    } else if (symbols.size > max) max = symbols.size;
  }
  return max;
}
