const leagueCalculate = (team1, team2, result) =>
  result === 'win'
    ? leagueTable
        .map((el) => (el[0] === team1 ? [el[0], (el[1] += 3)] : el))
        .sort((a, b) => b[1] - a[1])
    : leagueTable
        .map((el) => (el[0] === team1 || el[0] === team2 ? [el[0], (el[1] += 1)] : el))
        .sort((a, b) => b[1] - a[1]);
