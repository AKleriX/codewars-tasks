function shiftLeft(s, t) {
  let s1 = [...s].join(''),
    s2 = [...t].join(''),
    counter = 0;
  while (s1 !== s2 && s1.length > 0 && s2.length) {
    if (s1.length === s2.length) {
      counter += 2;
      s1 = s1.slice(1);
      s2 = s2.slice(1);
    } else {
      counter += 1;
      if (s1.length > s2.length) s1 = s1.slice(1);
      else s2 = s2.slice(1);
    }
  }
  return s1.length === 0 || s2.length === 0
    ? counter + (s1.length ? s1.length : s2.length)
    : counter;
}
