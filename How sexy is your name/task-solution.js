function sexyName(name) {
  const count = [...name.replace(/[^a-z]/gi, '').toUpperCase()].reduce((s, l) => s + SCORES[l], 0);
  return count <= 60
    ? 'NOT TOO SEXY'
    : count <= 300
    ? 'PRETTY SEXY'
    : count <= 599
    ? 'VERY SEXY'
    : 'THE ULTIMATE SEXIEST';
}
