export function lastSurvivors(str: string): string {
  let currentStr: string[] = str.split(''),
      lastStr: string[] = [];
  while (currentStr.length !== lastStr.length){
    lastStr = [...currentStr];
    currentStr = currentStr.sort().join('').replace(/(.)\1{1}/g, match => getNextLetter(match[0])).split('');
  }
  return currentStr.join('');
}

const getNextLetter = (letter: string): string => letter.charCodeAt(0) > 121 ? 'a' : String.fromCharCode(letter.charCodeAt(0) + 1); 