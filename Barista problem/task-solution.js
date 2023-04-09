const barista = (coffees) =>
  [...coffees].sort((a, b) => a - b).reduce((s, t, i) => s + t * (coffees.length - i) + 2 * i, 0);
