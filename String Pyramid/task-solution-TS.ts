export function watchPyramidFromTheSide(characters: string): string {
  let side: string[] = [];
  if (!characters || characters === '') return characters;
  for (let i = characters.length - 1; i >= 0; i--)
    side.push(
      ' '.repeat(i) + characters[i].repeat(2 * (characters.length - i) - 1) + ' '.repeat(i),
    );
  return side.join('\n');
}

export function watchPyramidFromAbove(characters: string): string {
  if (!characters || characters === '') return characters;
  let view: string[] = [characters[0].repeat(characters.length * 2 - 1)];
  for (let i = 1; i < characters.length; i++)
    view.push(
      characters.slice(0, i) +
        characters[i].repeat(2 * (characters.length - i) - 1) +
        [...characters.slice(0, i)].reverse().join(''),
    );
  return view.concat(view.slice(0, -1).reverse()).join('\n');
}

export function countVisibleCharactersOfThePyramid(characters: string): number {
  return !characters || characters === '' ? -1 : (characters.length * 2 - 1) ** 2;
}

export function countAllCharactersOfThePyramid(characters: string): number {
  if (!characters || characters === '') return -1;
  let counter: number = 0;
  for (let i = 0; i < characters.length; i++) counter += (characters.length * 2 - 1 - i * 2) ** 2;
  return counter;
}
