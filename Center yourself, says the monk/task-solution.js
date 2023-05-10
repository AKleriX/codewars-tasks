function center(strng, width, fill = ' ') {
  width = (width - strng.length) / 2;
  return width <= 0
    ? strng
    : fill.repeat(Math.ceil(width)) + strng + fill.repeat(Math.floor(width));
}
