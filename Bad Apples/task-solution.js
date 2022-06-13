function badApples(input) {
  let repack = [],
    freeApples = [];
  for (let i = 0; i < input.length; i++) {
    let goodApples = input[i].filter((v) => v);
    if (goodApples.length === 2) repack.push(input[i]);
    else if (goodApples.length === 1) {
      for (let j = i + 1; j < input.length; j++) {
        let nextGoodApples = input[j].filter((v) => v);
        if (nextGoodApples.length === 1) {
          repack.push([goodApples[0], nextGoodApples[0]]);
          input[j] = [0, 0];
          break;
        }
      }
    }
  }
  return repack;
}
