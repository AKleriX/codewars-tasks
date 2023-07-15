const getMilitaryTime = (input) => {
  let letters = input.slice(-2),
    time = input.slice(0, -2).split(':').map(Number);
  time[0] = letters === 'PM' ? (time[0] === 12 ? 12 : time[0] + 12) : time[0] === 12 ? 0 : time[0];

  return time.map((n) => n.toString().padStart(2, '0')).join(':');
};
