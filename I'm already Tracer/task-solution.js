const teamComp = (heroes) => {
  if (heroes.length !== 6 || heroes.length !== new Set(heroes).size) throw new Error('GG');
  return [
    TANK.filter((c) => heroes.includes(c)).length,
    DAMAGE.filter((c) => heroes.includes(c)).length,
    SUPPORT.filter((c) => heroes.includes(c)).length,
  ];
};
