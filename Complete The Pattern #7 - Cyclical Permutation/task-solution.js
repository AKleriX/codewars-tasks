function pattern(n) {
  let line = Array.from({ length: n > 0 ? n : 0 }, (_, i) => i + 1),
    p = '';
  line = line.concat(line);
  for (let i = 0; i < n; i++) p += line.slice(i, i + n).join('') + (i === n - 1 ? '' : '\n');
  return p;
}
