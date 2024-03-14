const rotEnergies = (b, jMin, jMax) =>
  Array.from(
    { length: jMin <= jMax && b >= 0 ? jMax - jMin + 1 : 0 },
    (_, i) => b * (jMin + i) * (jMin + i + 1),
  );
