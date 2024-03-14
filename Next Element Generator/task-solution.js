function* nextElementGenerator(array) {
  let idx = 0;
  while (true) {
    yield array[idx];
    idx = (idx + 1) % array.length;
  }
}
