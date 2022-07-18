function quidditchScoreboard(teams, actions) {
  let teamsNames = teams.split(' vs '),
    teamsCounter = {},
    arrActions = actions.split(', ');
  teamsCounter[teamsNames[0]] = 0;
  teamsCounter[teamsNames[1]] = 0;
  for (let i = 0; i < arrActions.length; i++) {
    let team = arrActions[i].split(': ')[0],
      action = arrActions[i].split(': ')[1].split(' ')[1];
    teamsCounter[team] += action === 'goal' ? 10 : action === 'foul' ? -30 : 150;
    if (action === 'Snitch') break;
  }
  return `${teamsNames[0]}: ${teamsCounter[teamsNames[0]]}, ${teamsNames[1]}: ${
    teamsCounter[teamsNames[1]]
  }`;
}
