function* generator() {
  let counter = 1;
  while (true) {
    let newVal = yield counter;
    counter++;
    if (newVal) counter = newVal;
  }
}
