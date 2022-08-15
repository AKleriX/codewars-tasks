function frame(balls) {
  let ballsArr = balls.match(/[A-Z][a-z]*\d*/g) || [],
    counter = 0;
  if (balls.includes('W')) return 'Foul';
  for (let i = 0; i < ballsArr.length; i++) {
    let c = ballsArr[i].replace(/\d+/g, ''),
      n = +ballsArr[i].replace(/[^\d]+/g, '');
    counter += blz[c] * (n ? n : 1);
  }
  return counter < 148 ? counter : 'invalid data';
}
