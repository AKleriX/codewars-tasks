function waterbombs(fire, w) {
  let bombsCounter = 0,
    currentW = w;
  for (let i = 0; i < fire.length; i++)
    if ((fire[i] === 'Y' && currentW !== w) || (currentW === 1 && fire[i] !== 'Y')) {
      bombsCounter++;
      currentW = w;
    } else if (fire[i] === 'x') currentW--;
  if (currentW < w) bombsCounter++;
  return bombsCounter;
}
