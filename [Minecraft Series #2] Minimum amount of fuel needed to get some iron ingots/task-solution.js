function calcFuel(n) {
  const fuelTimes = { lava: 800, blazeRod: 120, coal: 80, wood: 15, stick: 1 };
  let needTime = n * 11;
  return Object.keys(fuelTimes).reduce((counter, fuel) => {
    counter[fuel] = Math.trunc(needTime / fuelTimes[fuel]);
    needTime %= fuelTimes[fuel];
    return counter;
  }, {});
}
