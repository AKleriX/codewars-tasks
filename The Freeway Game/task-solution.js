const freewayGame = function (distKmToExit, mySpeedKph, otherCars) {
  let count = 0,
    timeToExit = distKmToExit / mySpeedKph;
  for (let i = 0; i < otherCars.length; i++) {
    let distToStart = (otherCars[i][0] * otherCars[i][1]) / 60;
    if (-distToStart + otherCars[i][1] * timeToExit < distKmToExit && otherCars[i][0] < 0) count++;
    else if (-distToStart + otherCars[i][1] * timeToExit > distKmToExit && otherCars[i][0] > 0)
      count--;
  }
  return count;
};
