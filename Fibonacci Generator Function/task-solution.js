function* fibonacci() {
  let fib = [0, 1],
    c = 0;
  while (true) {
    if (fib[c] === undefined) fib.push(fib[c - 1] + fib[c - 2]);
    c++;
    yield fib[c - 1];
  }
}
