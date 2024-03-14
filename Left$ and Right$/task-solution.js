const left$ = (str, i = 1) => {
  if (typeof i === 'string') return str.slice(0, str.indexOf(i));
  return i > 0 ? str.slice(0, i) : !i ? '' : str.slice(0, i);
};

const right$ = (str, i = 1) => {
  if (typeof i === 'string') return str.slice(str.lastIndexOf(i) + i.length);
  return i > 0 ? str.slice(-i) : !i ? '' : str.slice(-i);
};
