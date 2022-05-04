function faroCount(deckSize) {
  let pos = 1,
    shuffles = 0;
  do {
    shuffles++;
    pos = Math.trunc((deckSize * (pos % 2) + pos) / 2);
  } while (pos > 1);
  return shuffles;
}
