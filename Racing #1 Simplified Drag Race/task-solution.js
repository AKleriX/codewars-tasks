const dragRace = (len, anna, bob) => {
  const aTime = len / anna.speed + anna.reactionTime,
    bTime = len / bob.speed + bob.reactionTime;
  return aTime === bTime ? "It's a draw" : `${aTime > bTime ? 'Bob' : 'Anna'} is the winner`;
};
