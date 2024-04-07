const areaVolume = (a, b, h, l) => {
  const aL = Math.sqrt(((b - a) / 2) ** 2 + h ** 2),
    area = Math.round((a + b + aL * 2) * l + (a + b) * h),
    v = Math.round(0.5 * (a + b) * h * l);
  return [area, v];
};
