function zombieShootout(zombies, range, ammo) {
  let killZom = 0;
  while (range > 0 && zombies > 0 && ammo > 0) {
    range -= 0.5;
    zombies--;
    ammo--;
    killZom++;
  }
  return !zombies
    ? `You shot all ${killZom} zombies.`
    : `You shot ${killZom} zombies before being eaten: ${
        !range ? 'overwhelmed' : 'ran out of ammo'
      }.`;
}
