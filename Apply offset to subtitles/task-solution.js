const subsOffsetApply = (str, offset) => {
  const timeToMs = (time) => {
    const [h, m, s] = time.split(':'),
      [sec, ms] = s.split(',');
    return parseInt(h) * 3600000 + parseInt(m) * 60000 + parseInt(sec) * 1000 + parseInt(ms);
  };

  const msToTime = (ms) => {
    if (ms < 0 || ms > 359999999) return 'Invalid offset';
    const h = Math.floor(ms / 3600000);
    ms %= 3600000;
    const m = Math.floor(ms / 60000);
    ms %= 60000;
    const s = Math.floor(ms / 1000),
      msRest = ms % 1000;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(
      2,
      '0',
    )},${String(msRest).padStart(3, '0')}`;
  };

  const parts = str.match(/(.*) --> (.*)/),
    start = parts[1],
    end = parts[2],
    text = str.slice(30),
    startMs = timeToMs(start),
    endMs = timeToMs(end),
    newStart = msToTime(startMs + offset),
    newEnd = msToTime(endMs + offset);

  if (newStart === 'Invalid offset' || newEnd === 'Invalid offset') return 'Invalid offset';

  return `${newStart} --> ${newEnd} ${text}`;
};
