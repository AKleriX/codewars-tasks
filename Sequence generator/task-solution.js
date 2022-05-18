function* sequenceGen() {
  let length = arguments.length,
    seq = [...arguments],
    idx = 0;
  while (true) {
    if (idx === seq.length) seq.push(seq.slice(seq.length - length).reduce((sum, n) => sum + n));
    idx++;
    yield seq[idx - 1];
  }
}
