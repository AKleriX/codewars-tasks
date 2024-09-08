export function triangle(row: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz',
    getLetterIndex = (char: string): number => {
      return alphabet.indexOf(char) + 1;
    },
    getLetterFromIndex = (index: number): string => {
      return alphabet[(index - 1) % 26];
    };
  while (row.length > 1) {
    let newStr = '';
    for (let i = 0; i < row.length - 1; i++) {
      const sum = getLetterIndex(row[i]) + getLetterIndex(row[i + 1]);
      newStr += getLetterFromIndex(sum);
    }
    row = newStr;
  }

  return row;
}
