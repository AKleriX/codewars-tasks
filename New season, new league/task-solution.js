const premierLeagueStandings = (teamStandings) => {
  const res = {},
    otherTeams = [];
  for (let pos in teamStandings)
    if (pos == 1) res['1'] = teamStandings[pos];
    else otherTeams.push(teamStandings[pos]);
  otherTeams.sort().forEach((t, i) => (res[i + 2] = t));
  return res;
};
