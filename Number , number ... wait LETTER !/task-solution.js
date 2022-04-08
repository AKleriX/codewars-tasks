function doMath(s) {
  const calc = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
  let sortSeq = s
    .split(' ')
    .map((n, i) => {
      let letter = [...n].find((l) => /[a-z]/i.test(l)),
        num = Number(n.replace(letter, ''));
      return [letter, num, i];
    })
    .sort((a, b) => (a[0] === b[0] ? a[2] - b[2] : a[0].localeCompare(b[0])))
    .map((n) => n[1]);
  return Math.round(sortSeq.reduce((res, n, i) => calc[(i - 1) % 4](res, n)));
}
