function whatListAmIOn(actions) {
  let counter = 0;
  for (let i = 0; i < actions.length; i++)
    counter += /[bfk]/g.test(actions[i][0]) ? -1 : /[gsn]/g.test(actions[i][0]) ? 1 : 0;
  return counter > 0 ? 'nice' : 'naughty';
}
