export function addLetters(...letters: string[]) {
  return String.fromCharCode(
    letters.reduce((sum, l) => (sum + l.charCodeAt(0) - 96) % 26, 25) + 97,
  );
}
