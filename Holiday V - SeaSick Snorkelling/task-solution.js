function seaSick(x) {
  let c = 0;
  for (let i = 1; i < x.length; i++) if (x[i - 1] !== x[i]) c++;
  return c / x.length > 0.2 ? 'Throw Up' : 'No Problem';
}
