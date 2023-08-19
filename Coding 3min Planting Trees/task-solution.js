const sc = (width, length, gaps) => {
  const l = 2 * width + 2 * (length - 2);
  return !(l % (gaps + 1)) ? l / (gaps + 1) : 0;
};
