const leaderB = (user, user_score, your_score) => {
  const dif = user_score - your_score;
  return !dif
    ? 'Only need one!'
    : dif < 0
    ? 'Winning!'
    : `To beat ${user}'s score, I must complete ${(dif / 3) | 0} Beta kata and ${
        dif % 3
      } 8kyu kata.${((dif / 3) | 3) + (dif % 3) > 1000 ? ' Dammit!' : ''}`;
};
