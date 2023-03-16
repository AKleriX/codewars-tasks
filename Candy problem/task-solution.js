function candies(kids) {
  const maxCandy = Math.max.apply(Math, kids);
  return kids.length > 1 ? kids.reduce((s, c) => s + maxCandy - c, 0) : -1;
}
