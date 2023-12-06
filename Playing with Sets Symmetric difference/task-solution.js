const symDiff = (s1, s2) =>
  new Set([...new Set([...s1, ...s2])].filter((el) => !(s1.has(el) && s2.has(el))));
