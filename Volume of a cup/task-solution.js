const cupVolume = (d1, d2, height) =>
  +((Math.PI * height * ((d1 / 2) ** 2 + (d1 / 2) * (d2 / 2) + (d2 / 2) ** 2)) / 3).toFixed(2);
