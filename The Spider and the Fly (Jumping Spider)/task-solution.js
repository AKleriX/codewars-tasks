const spiderToFly = function (spider, fly) {
  const spiderA = Number(spider[1]),
    flyA = Number(fly[1]),
    ang = 'CBAHGFED',
    posY = Math.abs(ang.indexOf(spider[0]) - ang.indexOf(fly[0])) * 45;
  return Math.sqrt(
    spiderA ** 2 + flyA ** 2 - 2 * spiderA * flyA * Math.cos(posY / (180 / Math.PI)),
  );
};
