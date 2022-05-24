function watchPyramidFromTheSide(characters) {
  let side = [];
  if (!characters || characters === '') return characters;
  for (let i = characters.length - 1; i >= 0; i--)
    side.push(
      ' '.repeat(i) + characters[i].repeat(2 * (characters.length - i) - 1) + ' '.repeat(i),
    );
  return side.join('\n');
}

function watchPyramidFromAbove(characters) {
  if (!characters || characters === '') return characters;
  let view = [characters[0].repeat(characters.length * 2 - 1)];
  for (let i = 1; i < characters.length; i++)
    view.push(
      characters.slice(0, i) +
        characters[i].repeat(2 * (characters.length - i) - 1) +
        [...characters.slice(0, i)].reverse().join(''),
    );
  return view.concat(view.slice(0, -1).reverse()).join('\n');
}

function countVisibleCharactersOfThePyramid(characters) {
  return !characters || characters === '' ? -1 : (characters.length * 2 - 1) ** 2;
}

function countAllCharactersOfThePyramid(characters) {
  if (!characters || characters === '') return -1;
  let counter = 0;
  for (let i = 0; i < characters.length; i++) counter += (characters.length * 2 - 1 - i * 2) ** 2;
  return counter;
}
