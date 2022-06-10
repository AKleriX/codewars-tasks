Dragon = function (n, str = n >= 0 && n === parseInt(n) ? 'Fa' : '') {
  if (n > 0)
    return Dragon(
      n - 1,
      str.replace(/[ab]/g, (l) => (l === 'a' ? 'aRbFR' : 'LFaLb')),
    );
  return str.replace(/[ab]/g, '');
};
