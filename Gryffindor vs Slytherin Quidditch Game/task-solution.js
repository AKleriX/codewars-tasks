const gameWinners = (gryffindor, slytherin) => {
  const gPoints = getCorrectPoints(gryffindor),
    sPoints = getCorrectPoints(slytherin);
  return gPoints === sPoints
    ? `It's a draw!`
    : `${gPoints > sPoints ? 'Gryffindor' : 'Slytherin'} wins!`;
};

const getCorrectPoints = (d) => d[0] + (d[1] === 'yes' ? 150 : 0);
