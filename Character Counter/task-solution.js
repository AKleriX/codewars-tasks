function validateWord(s) {
  let counter = [...s.toLowerCase()].reduce((c, el) => ((c[el] = (c[el] || 0) + 1), c), {});
  return new Set(Object.values(counter)).size === 1;
}
