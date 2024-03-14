const repeatSequenceLen = (a) => {
  const s = [];
  while (!s.includes(a)) {
    s.push(a);
    a = [...a.toString()].reduce((s, d) => s + (+d) ** 2, 0);
  }
  return s.length - s.indexOf(a);
};
