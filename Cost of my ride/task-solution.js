function insurance(age, size, numofdays) {
  const carSizes = {
    economy: 0,
    medium: 10,
    'full-size': 15,
  };
  if (!carSizes.hasOwnProperty(size)) size = 'full-size';
  return (numofdays > 0 ? numofdays : 0) * (carSizes[size] + (age < 25 ? 10 : 0) + 50);
}
