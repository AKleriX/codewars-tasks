const hexColor = (codes) => {
  const c = codes.split(' ').map(Number),
    maxVal = Math.max(...c),
    i = c.indexOf(maxVal);
  if (c.lastIndexOf(maxVal) !== i && maxVal) {
    const j = c.lastIndexOf(maxVal);
    if (i === 0 && j === 1) return 'yellow';
    if (i === 0 && j === 2 && c[1] === maxVal) return 'white';
    if (i === 0 && j === 2) return 'magenta';
    if (i === 1 && j === 2) return 'cyan';
  }
  return !maxVal ? 'black' : !i ? 'red' : i === 1 ? 'green' : 'blue';
};
