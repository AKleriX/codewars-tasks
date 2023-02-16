function firstNonRepeated(s) {
  let counter = [...s].reduce((c, s) => ((c[s] = (c[s] || 0) + 1), c), {});
  for (let s in counter) if (counter[s] === 1) return s;
  return null;
}
