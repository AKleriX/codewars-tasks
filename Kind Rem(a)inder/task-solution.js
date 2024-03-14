const kira = (a, b, c) =>
  !(Math.max(...a.map((n, i) => n % b[i])) % 2) ? c.toLowerCase() : c.toUpperCase();
