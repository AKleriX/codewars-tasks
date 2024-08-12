const parkingCost = (timeIn, timeOut) => {
  const [inHours, inMinutes] = timeIn.split(':').map(Number),
    [outHours, outMinutes] = timeOut.split(':').map(Number);

  let inTotal = inHours * 60 + inMinutes,
    outTotal = outHours * 60 + outMinutes;

  if (outTotal < inTotal) outTotal += 24 * 60;

  let duration = Math.ceil((outTotal - inTotal) / 10) * 10;

  if (duration <= 30) return 0;
  if (duration <= 120) return Math.ceil((duration - 30) / 10);

  return Math.ceil((duration - 120) / 10) * 2 + 9;
};
