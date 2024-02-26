const correct = (leaderBoard) => {
  let currentFirstPos = leaderBoard.slice(3, leaderBoard.indexOf('\n'));
  return leaderBoard.replace(new RegExp(currentFirstPos + '|' + 'myjinxin2015', 'g'), (m) =>
    m === currentFirstPos ? 'myjinxin2015' : currentFirstPos,
  );
};
