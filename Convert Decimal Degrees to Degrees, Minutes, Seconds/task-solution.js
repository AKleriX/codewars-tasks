const convert = (degrees) => {
  let deg = degrees | 0,
    min = ((degrees - deg) * 60) | 0,
    sec = Math.round(((degrees - deg) * 60 - min) * 60),
    res = [];

  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    deg++;
  }

  if (sec) res.unshift(sec);
  if (min || sec) res.unshift(min);
  if (deg || sec || min) res.unshift(deg);

  return res.length ? res : [0];
};
