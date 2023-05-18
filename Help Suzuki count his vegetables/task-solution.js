function countVegetables(string) {
  const vegs = [
    'cabbage',
    'carrot',
    'celery',
    'cucumber',
    'mushroom',
    'onion',
    'pepper',
    'potato',
    'tofu',
    'turnip',
  ];
  let dict = {},
    words = string.split(' '),
    res = [];
  for (let i = 0; i < words.length; i++)
    if (vegs.includes(words[i])) dict[words[i]] = (dict[words[i]] || 0) + 1;
  for (let veg in dict) res.push([dict[veg], veg]);
  return res.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
}
