const burner = (c, h, o) => {
  let water = Math.min(Math.floor(h / 2), o),
    co2 = Math.min(c, Math.floor((o - water) / 2)),
    methane = Math.min(c - co2, Math.floor((h - water * 2) / 4));
  return [water, co2, methane];
};
