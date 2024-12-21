const testit = (arr) => {
  const lengthUnits = ['mm', 'cm', 'dm', 'm', 'km'],
    timeUnits = ['ms', 's', 'm', 'h', 'd'];

  const parsed = arr.map((entry) => {
    const match = entry.match(/^(\d+)([a-z]+)$/);
    return match ? { value: parseInt(match[1], 10), unit: match[2], original: entry } : null;
  });

  if (parsed.includes(null)) return null;

  const allLengthUnits = parsed.every((item) => lengthUnits.includes(item.unit)),
    allTimeUnits = parsed.every((item) => timeUnits.includes(item.unit));

  if (!allLengthUnits && !allTimeUnits) return null;

  const unitScale = allLengthUnits ? lengthUnits : timeUnits;

  return arr.slice().sort((a, b) => {
    const [valueA, unitA] = [parseInt(a), a.match(/[a-z]+/)[0]],
      [valueB, unitB] = [parseInt(b), b.match(/[a-z]+/)[0]],
      indexA = unitScale.indexOf(unitA),
      indexB = unitScale.indexOf(unitB);
    return indexA === indexB ? valueA - valueB : indexA - indexB;
  });
};
