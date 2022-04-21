function workOnStrings(a, b) {
  let s1 = [...a].reduce((c, l) => ((c[l.toLowerCase()] = (c[l.toLowerCase()] || 0) + 1), c), {}),
    s2 = [...b].reduce((c, l) => ((c[l.toLowerCase()] = (c[l.toLowerCase()] || 0) + 1), c), {});
  return (
    [...a]
      .map((l) => (s2[l.toLowerCase()] && s2[l.toLowerCase()] % 2 ? changeCase(l) : l))
      .join('') +
    [...b].map((l) => (s1[l.toLowerCase()] && s1[l.toLowerCase()] % 2 ? changeCase(l) : l)).join('')
  );
}

const changeCase = (l) => (l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase());
