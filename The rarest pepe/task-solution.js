function findRarestPepe(pepes) {
  let pepeCounter = pepes.reduce((counter, pepe) => {
      counter[pepe] = counter[pepe] ? counter[pepe] + 1 : 1;
      return counter;
    }, {}),
    rarePepes = [],
    rareCount = Math.min.apply(null, Object.values(pepeCounter));
  for (let pepe in pepeCounter)
    if (pepeCounter[pepe] < 5 && pepeCounter[pepe] === rareCount) rarePepes.push(pepe);
  return rarePepes.length > 1
    ? rarePepes.sort()
    : rarePepes.length === 0
    ? 'No rare pepes!'
    : rarePepes[0];
}
