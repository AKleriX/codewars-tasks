function minimumPerimeter(area) {
  let minPer = Infinity;
  for (let i = 1; i < area ** 0.5 + 1; i++)
    if (!(area % i)) minPer = Math.min(minPer, 2 * (i + area / i));
  return minPer;
}
