const notes = ["G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"];

const whichNote = (keyPressCount) => notes[(keyPressCount % 88 || 88) % 12];