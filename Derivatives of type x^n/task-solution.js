function differentiate(f) {
  let xIndex = f.indexOf('x');
  if (xIndex < 0) return '0';
  let a = f.slice(0, xIndex),
      n = f.slice(xIndex + 2);
  a = a === '' || a === '-' ? (a === '' ? 1 : -1) : Number(a);
  n = n === '' ? 1 : Number(n);
  let newN = n - 1,
      newA = n * a;
  return `${Math.abs(newA) === 1 ? (!newN ? newA : newA > 0 ? '' : '-') : newA}${newN ? 'x' : ''}${!newN || newN === 1 ? '' : '^' + newN}`;
}