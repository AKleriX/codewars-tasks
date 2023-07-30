const ageInDays = (year, month, day) =>
  `You are ${Math.floor(
    (Date.now() - new Date(`${year}-${month}-${day}`).getTime()) / (8.64 * 10 ** 7),
  )} days old`;
