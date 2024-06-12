const minutesToMidnight = (d) => {
  const midnight = new Date(d);

  midnight.setHours(24, 0, 0, 0);

  const dif = midnight - d,
    m = Math.round(dif / 60000);

  return `${m} minute${m > 1 ? 's' : ''}`;
};
