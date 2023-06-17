function gematria(str) {
  const abc = 'abcdefghiklmnopqrstuxyzjv w',
    noSpaceStr = str.replace(/\s/g, '');
  let counter = 0;
  for (let i = 0; i < noSpaceStr.length; i++) {
    let pos = abc.indexOf(noSpaceStr[i].toLowerCase()) + 1;
    if (pos >= 20) pos = ((pos % 20) + 2) * 100;
    else if (pos > 10) pos = ((pos % 10) + 1) * 10;
    counter += pos;
  }
  return counter;
}
