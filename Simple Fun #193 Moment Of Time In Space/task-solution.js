const momentOfTimeInSpace = (moment) => {
  const time = (moment.match(/[1-9]/g) || []).reduce((s, v) => s + +v, 0),
    space = (moment.match(/[^1-9]/g) || []).length;
  return [time < space, time === space, time > space];
};
