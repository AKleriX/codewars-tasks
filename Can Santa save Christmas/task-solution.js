const determineTime = (durations) =>
  durations.reduce(
    (s, t) =>
      s +
      t
        .split(':')
        .reduce((sec, time, i) => sec + (!i ? +time * 3600 : i === 1 ? +time * 60 : +time), 0),
    0,
  ) <=
  24 * 3600;
