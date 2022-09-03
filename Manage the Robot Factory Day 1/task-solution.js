function calculateScrap(scraps, numberOfRobots) {
  let mass = numberOfRobots * 50;
  for (let i = scraps.length - 1; i >= 0; i--) mass *= 100 / (100 - scraps[i]);
  return Math.ceil(mass);
}
