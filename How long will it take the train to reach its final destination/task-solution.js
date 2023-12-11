const reachDestination = (distance, speed) =>
  `The train will be there in ${
    (distance / speed) % 1 < 0.25
      ? (distance / speed) | 0
      : (distance / speed) % 1 >= 0.75
      ? ((distance / speed) | 0) + 1
      : ((distance / speed) | 0) + 0.5
  } hour${distance === speed ? '' : 's'}.`;
