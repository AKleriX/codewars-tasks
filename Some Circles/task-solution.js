const sumCircles = (...d) =>
  `We have this much circle: ${Math.round(d.reduce((s, n) => s + Math.PI * (n / 2) ** 2, 0))}`;
