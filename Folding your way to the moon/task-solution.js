const foldTo = (distance) =>
  distance < 0 ? null : distance < 0.0001 ? 0 : Math.ceil(Math.log2(distance / 0.0001));
