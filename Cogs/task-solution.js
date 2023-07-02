function cogRpm(cogs) {
  let speed = 1;
  for (let i = 1; i < cogs.length; i++) speed *= cogs[i - 1] / cogs[i];
  return speed * (cogs.length % 2 ? 1 : -1);
}
