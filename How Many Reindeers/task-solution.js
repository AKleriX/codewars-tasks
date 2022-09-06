function reindeers(presents) {
  if (presents > 180) throw new Error('Error');
  return Math.ceil(presents / 30) + 2;
}
