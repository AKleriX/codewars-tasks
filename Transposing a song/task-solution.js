const transpose = (song, interval) => {
  const originalNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
    resNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  return song.map((n) => {
    let notePos = originalNotes.indexOf(n) < 0 ? resNotes.indexOf(n) : originalNotes.indexOf(n),
      newPos = notePos + interval;
    return resNotes[newPos < 0 ? 12 + newPos : newPos % 12];
  });
};
