function findSpaceship(map) {
  if (map) {
    let revMap = map.split('\n').reverse();
    for (let i = 0; i < revMap.length; i++)
      if (revMap[i].includes('X')) return [revMap[i].indexOf('X'), i];
  }
  return 'Spaceship lost forever.';
}
