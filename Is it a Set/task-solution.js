function isValidSet(quantities, shapes, colours, patterns) {
  let sets = [
    new Set(quantities).size,
    new Set(shapes).size,
    new Set(colours).size,
    new Set(patterns).size,
  ];
  return sets.every((l) => l === 3) || sets.some((l) => l === 1);
}
