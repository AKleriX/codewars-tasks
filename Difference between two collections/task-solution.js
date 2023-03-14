function diff(a, b) {
  return [
    ...a.filter((el, i, arr) => arr.indexOf(el) === i && b.indexOf(el) === -1),
    ...b.filter((el, i, arr) => arr.indexOf(el) === i && a.indexOf(el) === -1),
  ].sort();
}
