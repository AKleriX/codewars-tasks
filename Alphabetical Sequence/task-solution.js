const alphaSeq = (str) =>
  [...str.toLowerCase()]
    .sort()
    .map((l) => l.toUpperCase() + l.repeat(l.charCodeAt(0) - 97))
    .join(',');
