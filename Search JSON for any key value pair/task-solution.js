const getCharacters = (obj, key, val) =>
  obj.characters.filter((el) => new RegExp('^' + val + '$', 'i').test(el[key]));
