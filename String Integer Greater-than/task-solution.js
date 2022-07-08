function stringIntGreaterThan(a, b) {
  const comp = {
    '>': (a, b) => +a > +b,
    '<': (a, b) => +a < +b,
  };
  let maxLength = Math.max(a.length - (a[0] === '-'), b.length - (b[0] === '-')),
    currentA = addZeros(a, maxLength),
    currentB = addZeros(b, maxLength),
    compare = false,
    idx = 0,
    s = '>';
  if (currentA[0] === '-' && currentB[0] !== '-') return false;
  if (currentA[0] !== '-' && currentB[0] === '-') return true;
  if (currentA[0] === '-') {
    s = '<';
    idx = 1;
  }
  for (let i = idx; i < maxLength + idx; i++)
    if (comp[s](currentA[i], currentB[i])) {
      compare = true;
      break;
    } else if (currentA[i] !== currentB[i]) return false;
  return compare;
}

const addZeros = (str, length) =>
  (str[0] === '-' ? '-' : '') +
  '0'.repeat(length - str.length + (str[0] === '-')) +
  str.slice(str[0] === '-');
