function chmodCalculator(perm) {
  let octal = [0, 0, 0];
  for (let per in perm) {
    let idx = per === 'user' ? 0 : per === 'group' ? 1 : 2;
    octal[idx] = perm[per]
      .replace(/r|w|x|-/g, (m) => (m === 'r' ? 4 : m === 'w' ? 2 : m === 'x' ? 1 : 0))
      .split('')
      .reduce((s, p) => +s + +p);
  }
  return octal.join('');
}
