const chooseShows = (showList) => {
  if (showList.length === 0) return [['No shows to see!'], 0];

  const sortedShows = [...showList].sort((a, b) =>
    a.time === b.time ? a.price - b.price : a.time - b.time,
  );

  let result = [],
    totalCost = 0,
    lastEndTime = 0;

  for (let show of sortedShows) {
    if (show.time >= lastEndTime) {
      result.push(show.name);
      totalCost += show.price;
      lastEndTime = show.time + show.length + 0.5;
    }
  }

  return [result, totalCost];
};
