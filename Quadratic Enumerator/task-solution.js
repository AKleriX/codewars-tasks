function* quadraticGen(a, b, c, start = 0, step = 1) {
  while (true) {
    yield [start, a * start ** 2 + b * start + c];
    start += step;
  }
}
