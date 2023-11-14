const calculator = (distance, busDrive, busWalk) => {
  const bus = busWalk / 5 + busDrive / 8,
    walk = distance / 5;
  return walk > 2 || (bus < walk && walk * 60 > 10) ? 'Bus' : 'Walk';
};
