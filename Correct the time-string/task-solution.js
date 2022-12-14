function timeCorrect(timestring) {
  if (timestring === '') return '';
  if (!/^\d\d:\d\d:\d\d$/.test(timestring)) return null;
  let [hour, min, sec] = timestring.split(':').map(Number);
  if (sec >= 60) {
    min += (sec / 60) | 0;
    sec %= 60;
  }
  if (min >= 60) {
    hour += (min / 60) | 0;
    min %= 60;
  }
  if (hour > 23) hour %= 24;
  return `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
}

const addZero = (n) => (n > 9 ? n : '0' + n);
