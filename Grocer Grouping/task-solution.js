function solution(input) {
  let groups = {
      fruit: [],
      meat: [],
      other: [],
      vegetable: [],
    },
    items = input.split(',');
  for (let i = 0; i < items.length; i++) {
    let [cat, name] = items[i].split('_');
    if (groups.hasOwnProperty(cat)) groups[cat].push(name);
    else groups['other'].push(name);
  }
  return Object.keys(groups)
    .map((key) => `${key}:${groups[key].sort().join(',')}`)
    .join('\n');
}
