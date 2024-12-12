const majorScale = (melody) => {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    s = [2, 2, 1, 2, 2, 2, 1];

  if (melody.startsWith('#') || melody.includes('##')) return 'No major scale';

  const uniqueNotes = new Set();
  for (let i = 0; i < melody.length; i++) {
    if (melody[i] === '#') continue;
    const note = melody[i] + (melody[i + 1] === '#' ? '#' : '');
    if (note === 'E#' || note === 'B#') return 'No major scale';
    uniqueNotes.add(note);
  }

  if (uniqueNotes.size !== 7) return 'No major scale';

  const melodyNotes = Array.from(uniqueNotes);

  for (let start = 0; start < notes.length; start++) {
    const scale = [];
    let index = start;
    scale.push(notes[index]);

    for (const step of s) {
      index = (index + step) % notes.length;
      scale.push(notes[index]);
    }

    scale.pop();

    if (melodyNotes.every((note) => scale.includes(note))) return `${notes[start]} major scale`;
  }

  return 'No major scale';
};
