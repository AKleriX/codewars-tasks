const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let currentHight = upSpeed,
    daysCounter = 1;
  while (currentHight < desiredHeight) {
    daysCounter++;
    currentHight += upSpeed - downSpeed;
  }
  return daysCounter;
};
