const maximizePoints = (team1, team2) => {
  const sortedT1 = [...team1].sort((a, b) => a - b),
    sortedT2 = [...team2].sort((a, b) => a - b);

  let score = 0,
    j = 0;

  for (let i = 0; i < sortedT1.length; i++)
    if (sortedT1[i] > sortedT2[j]) {
      score++;
      j++;
    }

  return score;
};
