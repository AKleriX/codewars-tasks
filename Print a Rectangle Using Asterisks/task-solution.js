const getRectangleString = (width, height) =>
  Array.from(
    { length: height },
    (_, i) =>
      '*' +
      (!i || i === height - 1 ? '*' : ' ').repeat(width > 2 ? width - 2 : 0) +
      (width > 1 ? '*' : ''),
  ).join('\r\n') + '\r\n';
