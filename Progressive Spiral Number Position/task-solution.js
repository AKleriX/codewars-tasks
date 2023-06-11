function layers(n) {
  let currentLvl = 1,
    side = 1,
    range = 1;
  while (n > range) {
    range += (2 * side + 2) * 2;
    currentLvl++;
    side += 2;
  }
  return currentLvl;
}
