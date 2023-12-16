export function* allRationals(): IterableIterator<[number, number]> {
  const seq: [number, number][] = [[1, 1]];
  let pos: number = 0;
  while (true) {
    let el = seq[pos];
    yield el;
    seq.push([el[0], el[0] + el[1]]);
    seq.push([el[0] + el[1], el[1]]);
    pos++;
  }
}
