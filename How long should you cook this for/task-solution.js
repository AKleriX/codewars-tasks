const cookingTime = (neededPower, minutes, seconds, power) => {
  const t = Math.ceil(((minutes * 60 + seconds) * neededPower.slice(0, -1)) / power.slice(0, -1));
  return `${(t / 60) | 0} minutes ${t % 60} seconds`;
};
