export function* paperFold(): Generator<number, any, undefined> {
  let n: number = 1;
  while (true) {
    let tmpN: number = n;
    while (!(tmpN % 2)) tmpN /= 2;
    n++;
    yield tmpN % 4 === 1 ? 1 : 0;
  }
}
