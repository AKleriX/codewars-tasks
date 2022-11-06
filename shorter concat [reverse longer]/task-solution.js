function shorter_reverse_longer(a, b) {
  let shorter = b.length > a.length ? a : b,
    longer = b.length > a.length ? b : a;
  return shorter + [...longer].reverse().join('') + shorter;
}
