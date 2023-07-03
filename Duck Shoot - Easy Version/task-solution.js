function duckShoot(ammo, aim, ducks) {
  let counter = (ammo * aim) | 0,
    tent = ducks.slice();
  while (counter-- > 0) tent = tent.replace(/2/, 'X');
  return tent;
}
