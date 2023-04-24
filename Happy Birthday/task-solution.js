function wrap(...sides) {
  let sortedSides = [...sides].sort((a, b) => b - a);
  return 20 + sortedSides[0] * 2 + sortedSides[1] * 2 + sortedSides[2] * 4;
}
