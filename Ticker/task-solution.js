const ticker = (text, width, tick) => {
  const str = ' '.repeat(width) + text + ' '.repeat(width);
  return str.slice(tick % (str.length - width), (tick % (str.length - width)) + width);
};
