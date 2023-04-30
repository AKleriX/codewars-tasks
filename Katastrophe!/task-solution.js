function strongEnough(earthquake, age) {
  let m = earthquake.reduce((p, a) => p * a.reduce((s, t) => s + t, 0), 1),
    currentStrength = 1000;
  while (age--) currentStrength -= currentStrength / 100;
  return m > currentStrength ? 'Needs Reinforcement!' : 'Safe!';
}
