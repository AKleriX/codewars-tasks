const lastSurvivor = (letters, coords) => {
  let currentLets = [...letters];
  for (let i = 0; i < coords.length; i++)
    currentLets = currentLets.filter((_, j) => j !== coords[i]);
  return currentLets.join('');
};
