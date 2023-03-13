const sentence = (arr) =>
  [...arr]
    .sort((a, b) => +Object.keys(a)[0] - +Object.keys(b)[0])
    .map((o) => Object.values(o)[0])
    .join(' ');
