function harvesterRescue(data) {
  const timeForCar =
      Math.sqrt(
        (data.carryall[0][0] - data.harvester[0]) ** 2 +
          (data.carryall[0][1] - data.harvester[1]) ** 2,
      ) /
        data.carryall[1] +
      1,
    timeForWorm =
      Math.sqrt(
        (data.worm[0][0] - data.harvester[0]) ** 2 + (data.worm[0][1] - data.harvester[1]) ** 2,
      ) / data.worm[1];
  return timeForCar < timeForWorm
    ? 'The spice must flow! Rescue the harvester!'
    : "Damn the spice! I'll rescue the miners!";
}
