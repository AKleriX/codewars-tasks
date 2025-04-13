const minorOrMajor = (chord) => {
  const notes = [
      'C',
      ['C#', 'Db'],
      'D',
      ['D#', 'Eb'],
      'E',
      'F',
      ['F#', 'Gb'],
      'G',
      ['G#', 'Ab'],
      'A',
      ['A#', 'Bb'],
      'B',
    ],
    noteIndex = (note) =>
      notes.findIndex((n) => n === note || (Array.isArray(n) && n.includes(note))),
    interval = (a, b) => (noteIndex(b) - noteIndex(a) + 12) % 12,
    arr = chord.split(' ');
  if (arr.length !== 3) return 'Not a chord';
  const first = interval(arr[0], arr[1]),
    second = interval(arr[1], arr[2]),
    third = interval(arr[0], arr[2]);
  if (first === 4 && second === 3 && third === 7) return 'Major';
  if (first === 3 && second === 4 && third === 7) return 'Minor';
  return 'Not a chord';
};
