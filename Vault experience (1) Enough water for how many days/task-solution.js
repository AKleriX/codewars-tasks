const thirstyIn = (water, ageOfDwellerArray) => {
  const waterPerDay = ageOfDwellerArray.reduce((s, a) => s + (a < 18 ? 1 : a > 50 ? 1.5 : 2), 0);
  return ageOfDwellerArray.length ? Math.floor(water / waterPerDay) : -1;
};
