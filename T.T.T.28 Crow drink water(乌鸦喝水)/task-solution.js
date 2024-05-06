const drinkWater = (bottleHeight, bottleRadius, waterHeight, crowMouth, littleStones) => {
  let v = (bottleHeight - waterHeight - crowMouth) * Math.PI * bottleRadius * bottleRadius,
    res = [];
  for (let i = 0; i < littleStones.length; i++) {
    if (v > 0) {
      res.push(littleStones[i]);
      v -= littleStones[i];
    } else break;
  }
  return v > 0 ? 'The crow is dead.' : res;
};
