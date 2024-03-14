const pitchClass = (note) => {
  const dict = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 },
    pitch = dict[note[0]] + (note[1] ? (note[1] === '#' ? 1 : -1) : 0);
  return /^[A-G][#b]?$/.test(note) ? (pitch < 0 ? 11 : pitch > 11 ? 0 : pitch) : null;
};
