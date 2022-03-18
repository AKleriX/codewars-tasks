function tvRemote(words) {
  let keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/* ',
    position = [0, 0],
    pressesCounter = 0,
    currentWords = words.replace(
      /([A-Z]+[^a-z]*)([a-z]?)/g,
      (_, p1, p2) => `*${p1.toLowerCase()}${p2 ? '*' + p2 : ''}`,
    );
  for (let i = 0; i < currentWords.length; i++) {
    let index = keys.indexOf(currentWords[i]),
      nextLetter = [(index / 8) | 0, index % 8];
    pressesCounter +=
      Math.abs(position[0] - nextLetter[0]) + Math.abs(position[1] - nextLetter[1]) + 1;
    position = nextLetter;
  }
  return pressesCounter;
}
