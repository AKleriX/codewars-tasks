function atomicNumber(num) {
  let electronsShells = [],
    currentLevel = 1;
  while (num > 0) {
    let electronsOnCurrentLevel = 2 * currentLevel ** 2;
    electronsShells.push(electronsOnCurrentLevel <= num ? electronsOnCurrentLevel : num);
    num -= electronsOnCurrentLevel;
    currentLevel++;
  }
  return electronsShells;
}
