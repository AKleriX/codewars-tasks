const findDuplicatePhoneNumbers = (phoneNumbers) => {
  const map = {
      A: '2',
      B: '2',
      C: '2',
      D: '3',
      E: '3',
      F: '3',
      G: '4',
      H: '4',
      I: '4',
      J: '5',
      K: '5',
      L: '5',
      M: '6',
      N: '6',
      O: '6',
      P: '7',
      R: '7',
      S: '7',
      T: '8',
      U: '8',
      V: '8',
      W: '9',
      X: '9',
      Y: '9',
    },
    c = {};

  phoneNumbers.forEach((n) => {
    let s = n
      .toUpperCase()
      .split('')
      .map((c) => map[c] || c)
      .filter((c) => c >= '0' && c <= '9')
      .join('');
    s = s.slice(0, 3) + '-' + s.slice(3);
    c[s] = (c[s] || 0) + 1;
  });

  return Object.entries(c)
    .filter(([, count]) => count > 1)
    .map(([n, count]) => `${n}:${count}`)
    .sort();
};
