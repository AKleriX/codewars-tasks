const wordsToMarks = (string) => [...string].reduce((s, l) => s + (l.charCodeAt() - 96), 0);
