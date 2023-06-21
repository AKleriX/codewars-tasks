function calculateTotal(team1, team2) {
  const t1s = team1.reduce(getSum, 0),
    t2s = team2.reduce(getSum, 0);
  return t1s > t2s;
}

const getSum = (sum, num) => sum + num;
