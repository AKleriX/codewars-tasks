const sizeToNumber = (size) =>
  /^x*s$/.test(size)
    ? 36 - 2 * (size.length - 1)
    : size === 'm'
    ? 38
    : /^x*l$/.test(size)
    ? 40 + 2 * (size.length - 1)
    : null;
