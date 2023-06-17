export function gematria(str: string): number {
  const abc: string = 'abcdefghiklmnopqrstuxyzjv w',
    noSpaceStr: string = str.replace(/\s/g, '');
  let counter: number = 0;
  for (let i = 0; i < noSpaceStr.length; i++) {
    let pos: number = abc.indexOf(noSpaceStr[i].toLowerCase()) + 1;
    if (pos >= 20) pos = ((pos % 20) + 2) * 100;
    else if (pos > 10) pos = ((pos % 10) + 1) * 10;
    counter += pos;
  }
  return counter;
}
