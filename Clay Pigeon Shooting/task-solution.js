function shoot(x) {
  let p1Score = 0,
    p2Score = 0;
  for (let i = 0; i < x.length; i++) {
    p1Score += x[i][0].P1.replace(/O/g, '').length * (1 + x[i][1]);
    p2Score += x[i][0].P2.replace(/O/g, '').length * (1 + x[i][1]);
  }
  return p1Score === p2Score ? 'Draw!' : p1Score > p2Score ? 'Pete Wins!' : 'Phil Wins!';
}
