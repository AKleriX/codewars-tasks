const whatNote = (string, fret) => {
  const notes = ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    pos = notes.indexOf(string.toUpperCase());
  return notes.slice(pos).concat(notes.slice(0, pos))[fret % 12];
};
