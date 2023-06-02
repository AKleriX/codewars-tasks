const montyHall = (correctDoorNumber, participantGuesses) =>
  Math.round(
    (participantGuesses.reduce((s, d) => (d === correctDoorNumber ? s : s + 1), 0) /
      participantGuesses.length) *
      100,
  );
