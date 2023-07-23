const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const chords = (root) => {
  const majorChord = [
      root,
      notes[(notes.indexOf(root) + 4) % 12],
      notes[(notes.indexOf(root) + 7) % 12],
    ],
    minorChord = [
      root,
      notes[(notes.indexOf(root) + 3) % 12],
      notes[(notes.indexOf(root) + 7) % 12],
    ];
  return [majorChord, minorChord];
};
