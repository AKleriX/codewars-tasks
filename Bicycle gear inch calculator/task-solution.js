const gearInchCalculator = (chainrings, sprockets) =>
  chainrings.map((r) => sprockets.map((s) => +((26 * r) / s).toFixed(1)));
