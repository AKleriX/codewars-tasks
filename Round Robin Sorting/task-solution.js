const santaSort = (unsortedNames) => {
  let map = new Map(),
    result = [];
  for (let g of unsortedNames) map.set(g, (map.get(g) || 0) + 1);
  let names = [...map.keys()].sort();
  while (map.size)
    for (let name of names) {
      if (map.get(name)) {
        result.push(name);
        map.set(name, map.get(name) - 1);
        if (!map.get(name)) map.delete(name);
      }
    }
  return result;
};
