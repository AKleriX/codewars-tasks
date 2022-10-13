function outed(meet, boss) {
  let peopleCounter = 0,
    points = Object.keys(meet).reduce((s, n) => {
      peopleCounter++;
      return s + meet[n] * (n === boss ? 2 : 1);
    }, 0);
  return points / peopleCounter <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
