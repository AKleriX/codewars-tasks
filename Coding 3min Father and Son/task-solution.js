const sc = (s) => {
  const dict = [...s].reduce((d, l) => ((d[l] = true), d), {});
  return [...s].filter((l) => dict[l.toLowerCase()] && dict[l.toUpperCase()]).join('');
};
