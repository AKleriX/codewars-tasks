function* allRationals() {
  const seq = [[1, 1]];
  let pos = 0;
  while (true) {
    let el = seq[pos];
    yield el;
    seq.push([el[0], el[0] + el[1]]);
    seq.push([el[0] + el[1], el[1]]);
    pos++;
  }
}
