const calculateSpeed = (distance, time) => {
  const m = {
    km: (km) => km * 1000,
    m: (m) => m,
    s: (s) => s,
    min: (min) => min * 60,
  };
  return (
    Math.round(
      (m[distance.match(/[a-z]+/)[0]](+distance.match(/\d+/)[0]) /
        m[time.match(/[a-z]+/)[0]](+time.match(/\d+/)[0])) *
        2.23694,
    ) + 'mph'
  );
};
