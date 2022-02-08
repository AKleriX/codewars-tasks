const beeramid = (bonus, price) => {
  let beerCount = Math.floor(bonus / price),
      levels = 1;
  for (; beerCount >= levels**2; levels++) beerCount -= levels**2;
  return levels - 1;
}