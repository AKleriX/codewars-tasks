function jumpTo(x, y) {
  let counter = 0;
  while (x < y) {
    if (!(y % 2) && y / 2 >= x) y /= 2;
    else y--;
    counter++;
  }
  return counter;
}
