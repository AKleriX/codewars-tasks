function cutTheRopes(a) {
  let currentRopes = [...a],
    steps = [currentRopes.length];
  while (currentRopes.length > 0) {
    let minRopes = Math.min.apply(null, currentRopes);
    currentRopes = currentRopes.map((r) => r - minRopes).filter((r) => r > 0);
    if (currentRopes.length > 0) steps.push(currentRopes.length);
  }
  return steps;
}
