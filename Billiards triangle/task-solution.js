function pyramid(balls) {
  let lvl = 0;
  while (balls > lvl) balls -= ++lvl;
  return lvl;
}
