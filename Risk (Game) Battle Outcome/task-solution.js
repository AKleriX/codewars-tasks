const battleOutcome = (attacker, defender) => {
  let sortedAtk = [...attacker].sort((a, b) => b - a),
    sortedDef = [...defender].sort((a, b) => b - a),
    counter = [0, 0];
  for (let i = 0; i < Math.min(sortedAtk.length, sortedDef.length); i++)
    if (sortedAtk[i] > sortedDef[i]) counter[1]++;
    else counter[0]++;
  return counter;
};
