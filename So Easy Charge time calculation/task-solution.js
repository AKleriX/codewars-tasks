const calculateTime = (b, c) =>
  +((b * 0.85) / c + (b * 0.1) / (c / 2) + (b * 0.05) / (c / 5)).toFixed(2);
