function pointsNumber(radius) {
  let c = 1;
  for (let i = 1; i <= radius; i++)
    for (let j = 0; Math.sqrt(i ** 2 + j ** 2) <= radius; j++) c += 4;
  return c;
}
