function compoundArray(a, b) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res.push(a[i]);
    if (b[i] !== undefined) res.push(b[i]);
  }
  if (b.length > a.length) res = res.concat(b.slice(a.length));
  return res;
}
