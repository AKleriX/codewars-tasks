function factors(x) {
  let factorsArr = [];
  if (typeof x !== 'number' || x % 1 || x < 1) return -1;
  for (let i = x; i >= 1; i--) if (!(x % i)) factorsArr.push(i);
  return factorsArr;
}
