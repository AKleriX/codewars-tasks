function guessTheCard(audience) {
  let seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    arr = [seq.slice(0, 7), seq.slice(7, 14), seq.slice(14)];
  for (let i = 0; i < 3; i++) {
    let pos = audience.getInput(arr);
    seq = arr[!pos ? 1 : 0].concat(arr[pos], arr[pos === 2 ? 1 : 2]);
    arr = [[], [], []];
    for (let j = 0; j < seq.length; j++) arr[j % 3].push(seq[j]);
  }
  return seq[10];
}
