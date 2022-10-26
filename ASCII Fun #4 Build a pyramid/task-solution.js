function buildPyramid(str, n) {
  let partsOfLvl = str.match(/(.)\1*/g),
    lvls = [];
  for (let i = 0; i < n; i++)
    lvls.push(
      ' '.repeat((str.length / 2) * (n - 1 - i)) + partsOfLvl.map((p) => p.repeat(i + 1)).join(''),
    );
  return lvls.join('\n');
}
