function bestMatch(ALAHLYGoals, zamalekGoals) {
  let bestIdx = 0,
    minDif = Infinity,
    maxGoal = -1;
  for (let i = 0; i < ALAHLYGoals.length; i++)
    if (
      minDif > ALAHLYGoals[i] - zamalekGoals[i] ||
      (minDif === ALAHLYGoals[i] - zamalekGoals[i] && maxGoal < zamalekGoals[i])
    ) {
      maxGoal = zamalekGoals[i];
      bestIdx = i;
      minDif = ALAHLYGoals[i] - zamalekGoals[i];
    }
  return bestIdx;
}
