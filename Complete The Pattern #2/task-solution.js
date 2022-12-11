function pattern(n) {
  let str = Array.from({ length: n }, (_, i) => n - i),
    output = [];
  for (let i = 0; i < n; i++) output.push(str.slice(0, str.length - i).join(''));
  return output.join('\n');
}
