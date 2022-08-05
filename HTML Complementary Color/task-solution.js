function getReversedColor(hexColor) {
  if (typeof hexColor !== 'string' || hexColor.length > 6 || /[^\da-f]/gi.test(hexColor))
    throw new Error('IllegalArgumentException');
  let currentColor = '0'.repeat(6 - hexColor.length) + hexColor,
    r = 255 - parseInt(currentColor.slice(0, 2), 16),
    g = 255 - parseInt(currentColor.slice(2, 4), 16),
    b = 255 - parseInt(currentColor.slice(4, 6), 16);
  return (
    '#' +
    (getZero(r.toString(16)) + getZero(g.toString(16)) + getZero(b.toString(16))).toUpperCase()
  );
}

const getZero = (n) => (n.length < 2 ? '0' + n : n);
