function solve(s) {
  if (s.length % 2) return -1;
  let closeCounter = 0,
    openCounter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') closeCounter++;
    else if (closeCounter) closeCounter--;
    else {
      closeCounter++;
      openCounter++;
    }
  }
  return closeCounter / 2 + openCounter;
}
