const toInteger = (n) => {
  if (typeof n === 'number') return n | 0;
  if (typeof n === 'boolean') return n ? 1 : 0;
  if (typeof n === 'string') {
    let num = +n;
    return isNaN(num) ? 0 : num | 0;
  }
  if (Array.isArray(n) && n.length === 1) return toInteger(n[0]);
  return 0;
};
