const areEquallyStrong = (...arms) =>
  arms
    .slice(0, 2)
    .sort((a, b) => a - b)
    .join(',') ===
  arms
    .slice(2)
    .sort((a, b) => a - b)
    .join(',');
