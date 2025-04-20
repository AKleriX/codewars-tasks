const findSuperMan = (
  text,
  code = 'superman',
  extract = (str) => [...str.toLowerCase()].filter((c) => code.includes(c)).join(''),
) => {
  const rev = [...code].reverse().join(''),
    clean = text
      .toLowerCase()
      .split(' ')
      .filter(
        (w) =>
          !w.includes(code) &&
          ![...code].some((c, i, a) => a[i + 1] && w.includes(c + a[i + 1])) &&
          ![...rev].some((c, i, a) => a[i + 1] && w.includes(c + a[i + 1])),
      )
      .join(' '),
    hidden = extract(clean);
  return hidden.includes(code) || hidden.includes(rev) ? 'Hi, SuperMan!' : 'Are you crazy?';
};
