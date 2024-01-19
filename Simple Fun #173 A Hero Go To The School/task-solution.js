const whichBusToTake = (busesColors, goingToSchool) => {
  const firstRed = busesColors.findIndex((b, i) => b === 'red' && goingToSchool[i]);
  return firstRed > -1 ? firstRed : busesColors.findIndex((b, i) => goingToSchool[i]);
};
