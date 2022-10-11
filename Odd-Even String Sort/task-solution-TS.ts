export function sortMyString(s: string): string {
  let evenLetters: string = '',
    oddLetters: string = '';
  for (let i = 0; i < s.length; i++)
    if (i % 2) oddLetters += s[i];
    else evenLetters += s[i];
  return `${evenLetters} ${oddLetters}`;
}
