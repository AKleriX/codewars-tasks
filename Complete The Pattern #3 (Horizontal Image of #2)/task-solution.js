function pattern(n) {
  let output = [];
  for (let i = n; i > 0; i--) output.push((output[output.length - 1] || '') + i);
  return output.join('\n');
}
