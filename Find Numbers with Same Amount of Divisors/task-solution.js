function countPairsInt(diff, nMax) {
  let counter = 0,
    divCounter = [0];
  for (let i = 1; i < nMax - diff; i++) {
    if (!divCounter[i]) divCounter[i] = getDivsCount(i);
    divCounter[i + diff] = getDivsCount(i + diff);
    if (divCounter[i] === divCounter[i + diff]) counter++;
  }
  return counter;
}

const getDivsCount = (n) => {
  let counter = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (!(n % i)) counter += 2;
  if (!(Math.sqrt(n) % 1)) counter++;
  return counter;
};
