function hasSurvived(attackers, defenders) {
  if (defenders.length < attackers.length) return false;
  let currentAttack = [...attackers].filter((n, i) => n > defenders[i]),
    currentDef = [...defenders].filter((n, i) => n > attackers[i]);
  return (
    currentDef.length > currentAttack.length ||
    (currentDef.length === currentAttack.length &&
      defenders.reduce((s, n) => s + n, 0) >= attackers.reduce((s, n) => s + n, 0))
  );
}
