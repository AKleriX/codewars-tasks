function remove(s) {
  while ((s.match(/(.)\1{2,}/g) || []).some((l) => l.length % 2))
    s = s
      .match(/(.)\1*/g)
      .filter((l) => l.length < 3 || !(l.length % 2))
      .join('');
  return s;
}
