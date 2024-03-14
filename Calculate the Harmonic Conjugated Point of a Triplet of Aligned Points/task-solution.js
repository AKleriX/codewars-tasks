const harmonPointTrip = (a, b, c) =>
  ((((a - c) / (b - c)) * b + a) / (1 + (a - c) / (b - c))).toFixed(2);
