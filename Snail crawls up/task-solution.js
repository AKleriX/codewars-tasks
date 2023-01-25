function snail(column, day, night) {
  let pos = night,
    counter = 0;
  while (pos < column) {
    pos -= night;
    counter++;
    pos += day;
  }
  return counter;
}
