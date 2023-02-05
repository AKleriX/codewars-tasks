const sumSquareEvenRootOdd = (ns) =>
  Math.round(ns.map((n) => (n % 2 ? Math.sqrt(n) : n ** 2)).reduce((s, n) => s + n) * 100) / 100;
