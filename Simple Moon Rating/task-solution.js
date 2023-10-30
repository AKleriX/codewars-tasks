const moonRating = (rating) => {
  let fullMoons = (rating / 2) | 0,
    halfMoon = 0;
  if ((rating / 2) % 1 >= 0.25 && (rating / 2) % 1 < 0.75) halfMoon = 1;
  else if ((rating / 2) % 1 >= 0.75) fullMoons += 1;
  return 'o'.repeat(fullMoons) + 'c'.repeat(halfMoon) + 'x'.repeat(5 - fullMoons - halfMoon);
};
