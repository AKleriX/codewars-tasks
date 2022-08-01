function makeChocolates(small, big, goal) {
  let bigCounter = big;
  while (((goal - 5 * bigCounter) % 2 && bigCounter > 0) || goal - 5 * bigCounter < 0) bigCounter--;
  if (!((goal - 5 * bigCounter) % 2) && goal - 5 * bigCounter <= small * 2)
    return (goal - 5 * bigCounter) / 2;
  return -1;
}
