const canStillWin = (table, racesRemaining) => {
  const c = racesRemaining * 25,
    min = Math.max(...Object.values(table)),
    a = Object.keys(table)
      .filter((k) => table[k] + c >= min)
      .sort();
  return a.length > 1
    ? `${a.slice(0, -1).join(', ')} and ${a.slice(-1)} can still win the championship.`
    : `${a[0]} has already won the championship!`;
};
