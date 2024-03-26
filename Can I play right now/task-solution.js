const canIPlay = (now, start, end) => {
  if (end < start) {
    if (now < start) now += 24;
    end += 24;
  }
  return now >= start && now < end;
};
