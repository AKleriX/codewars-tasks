function candiesToBuy(kids) {
  let candy = kids;
  for (let i = kids - 1; i > 0; i--)
    if (candy % i) {
      for (let j = 2; j <= i; j++)
        if (!((candy * j) % i)) {
          candy *= j;
          break;
        }
    }
  return candy;
}
