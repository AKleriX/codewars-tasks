function solve(str) {
  while (/\d*\([a-z]+\)/.test(str))
    str = str.replace(/(\d*)(\([a-z]+\))/g, (_, p1, p2) => p2.slice(1, -1).repeat(p1 ? +p1 : 1));
  return str;
}
