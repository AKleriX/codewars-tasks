const overTheRoad = (address, n) =>
  2 * (n - Math.ceil(address / 2) + (address % 2)) + !(address % 2);
