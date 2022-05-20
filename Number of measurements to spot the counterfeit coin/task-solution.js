const howManyMeasurements = (n, c = 0) =>
  n <= 1 ? c : howManyMeasurements(Math.ceil(n / 3), c + 1);
