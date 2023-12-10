const flipper = (stringArr) =>
  [...stringArr]
    .reverse()
    .map((w) => (w.length > 1 ? w.toLowerCase().slice(0, -1) + w.slice(-1).toUpperCase() : w))
    .join(' ');
