const execute = async (action, nTimes) =>
  await Promise.all(Array.from({ length: nTimes }, (_) => action()));
