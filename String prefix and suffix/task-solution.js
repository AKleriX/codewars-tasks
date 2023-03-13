function solve(s) {
  let maxLength = 0,
    idx = Math.floor(s.length / 2);
  while (!maxLength && idx > 0) if (s.endsWith(s.slice(0, idx--))) maxLength = ++idx;
  return maxLength;
}
