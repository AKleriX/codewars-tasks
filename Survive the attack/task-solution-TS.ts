export const hasSurvived = (attackers: number[], defenders: number[]): boolean => {
  let countAttack: number = attackers.filter((n, i) => n > (defenders[i] || 0)).length,
    countDef: number = defenders.filter((n, i) => n > (attackers[i] || 0)).length;
  if (countAttack === countDef)
    return defenders.reduce((acc, el) => acc + el, 0) >= attackers.reduce((acc, el) => acc + el, 0);
  return countDef > countAttack;
};
