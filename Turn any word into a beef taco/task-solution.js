function tacofy(word) {
  const dict = {
    a: 'beef',
    c: 'cheese',
    e: 'beef',
    g: 'guacamole',
    i: 'beef',
    l: 'lettuce',
    o: 'beef',
    s: 'salsa',
    t: 'tomato',
    u: 'beef',
  };
  let res = [];
  for (let i = 0; i < word.length; i++)
    if (dict[word[i].toLowerCase()]) res.push(dict[word[i].toLowerCase()]);
  return ['shell'].concat(res, ['shell']);
}
