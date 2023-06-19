function* generator(a) {
  let b = 1;
  while (true) {
    yield a + ' x ' + b + ' = ' + a * b;
    b++;
  }
}
