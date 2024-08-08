const GeometricSequenceSum = (a, r, n) => (r === 1 ? a * n : (a * (1 - r ** n)) / (1 - r));
