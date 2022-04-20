function pairOfShoes(shoes) {
  let pairsCounter = {};
  for (let i = 0; i < shoes.length; i++)
    pairsCounter[shoes[i][1]] = (pairsCounter[shoes[i][1]] || 0) + (shoes[i][0] ? 1 : -1);
  for (let size in pairsCounter) if (pairsCounter[size]) return false;
  return true;
}
