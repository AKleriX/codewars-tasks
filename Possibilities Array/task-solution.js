function isAllPossibilities(x) {
  return (
    x.length > 0 &&
    Array.from({ length: x.length }, (_, i) => i).toString() ===
      [...x].sort((a, b) => a - b).toString()
  );
}
