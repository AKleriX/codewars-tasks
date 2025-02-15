const optimumLocation = (students, locations) => {
  let bestLocation = null,
    minTotalDistance = Infinity;

  for (let loc of locations) {
    let totalDistance = students.reduce(
      (sum, [x, y]) => sum + Math.abs(x - loc.x) + Math.abs(y - loc.y),
      0,
    );
    if (totalDistance < minTotalDistance) {
      minTotalDistance = totalDistance;
      bestLocation = loc;
    }
  }

  return `The best location is number ${bestLocation.id} with the coordinates x = ${bestLocation.x} and y = ${bestLocation.y}`;
};
