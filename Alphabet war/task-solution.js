function alphabetWar(fight) {
  let count = 0,
    points = {
      w: 4,
      p: 3,
      b: 2,
      s: 1,
      m: -4,
      q: -3,
      d: -2,
      z: -1,
    };
  for (let i = 0; i < fight.length; i++) count += points[fight[i]] ? points[fight[i]] : 0;
  return count ? `${count > 0 ? 'Left' : 'Right'} side wins!` : `Let's fight again!`;
}
