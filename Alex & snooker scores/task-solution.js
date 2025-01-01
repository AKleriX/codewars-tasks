const frame = (score) => {
  const frames = score.split(';').map((f) => f.trim());
  let player1Wins = 0,
    player2Wins = 0;

  for (const f of frames) {
    const [player1Score, player2Score] = f.split('-').map((part) => {
      const match = part.match(/\d+/g);
      return match ? parseInt(match[0], 10) : 0;
    });

    if (player1Score > player2Score) player1Wins++;
    else if (player2Score > player1Score) player2Wins++;
  }

  return [player1Wins, player2Wins];
};
