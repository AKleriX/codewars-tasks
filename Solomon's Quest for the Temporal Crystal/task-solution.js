function solomonsQuest(a) {
  let currentPos = [0, 0],
    timeMul = 0;
  for (let i = 0; i < a.length; i++) {
    let pos = 0;
    timeMul += a[i][0];
    switch (a[i][1]) {
      case 0:
        currentPos[1] += a[i][2] * 2 ** timeMul;
        break;
      case 1:
        currentPos[0] += a[i][2] * 2 ** timeMul;
        break;
      case 2:
        currentPos[1] -= a[i][2] * 2 ** timeMul;
        break;
      case 3:
        currentPos[0] -= a[i][2] * 2 ** timeMul;
        break;
    }
  }
  return currentPos;
}
