function cycle(n) {
  let currentMod = 1,
    mods = new Set();
  if (!(n % 2) || !(n % 5)) return -1;
  while (!mods.has(currentMod)) {
    mods.add(currentMod);
    currentMod = (currentMod * 10) % n;
  }
  return mods.size;
}
