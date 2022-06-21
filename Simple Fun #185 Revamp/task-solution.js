function revamp(s) {
  let words = s
    .split(' ')
    .map((w) => [[...w].sort().join(''), [...w].reduce((s, l) => l.charCodeAt() + s, 0)]);
  return words
    .sort((a, b) =>
      a[1] === b[1]
        ? a[0].length === b[0].length
          ? a[0].localeCompare(b[0])
          : a[0].length - b[0].length
        : a[1] - b[1],
    )
    .map((w) => w[0])
    .join(' ');
}
