function alan(x) {
  let stopsAlan = new Set([
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway',
  ]);
  for (let i = 0; i < x.length && stopsAlan.size > 0; i++) stopsAlan.delete(x[i]);
  return stopsAlan.size === 0
    ? 'Smell my cheese you mother!'
    : 'No, seriously, run. You will miss it.';
}
