function fightResolve(defender, attacker) {
  if (
    (defender.toUpperCase() === defender && attacker.toUpperCase() === attacker) ||
    (defender.toLowerCase() === defender && attacker.toLowerCase() === attacker)
  )
    return -1;
  if (
    (defender.toLowerCase() === 'k' && attacker.toLowerCase() === 'a') ||
    (defender.toLowerCase() === 's' && attacker.toLowerCase() === 'p') ||
    (defender.toLowerCase() === 'a' && attacker.toLowerCase() === 's') ||
    (defender.toLowerCase() === 'p' && attacker.toLowerCase() === 'k')
  )
    return defender;
  return attacker;
}
