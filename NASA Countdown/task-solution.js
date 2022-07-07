function countdown(ms) {
  let absMs = Math.abs(ms),
    hours = Math.trunc(absMs / 3600000),
    mins = Math.trunc((absMs % 3600000) / 60000),
    sec = ((absMs % 3600000) % 60000) / 1000;
  return `${ms < 0 ? '-' : '+'}${addZero(hours)}:${addZero(mins)}:${addZero(sec)}`;
}

const addZero = (n) => (n < 10 ? `0${n}` : n.toString());
