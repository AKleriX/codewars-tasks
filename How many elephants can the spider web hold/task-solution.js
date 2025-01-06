const breakTheWeb = (strength, width) => {
  if (strength <= 0 || width <= 0) return 0;

  let counts = 0,
    weight = 1000;

  while (strength >= weight) {
    for (let i = 0; i < width; i++) {
      if (weight > strength) break;
      strength -= weight;
      counts++;
    }
    weight += 1000;
    width--;
  }

  return counts;
};
