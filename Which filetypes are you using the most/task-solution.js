function solve(files) {
  let maxCount = 0,
    maxTypes = [],
    types = {};
  files.forEach((name, i) => {
    let type = name.match(/\.[a-z0-9]+$/i)[0];
    if (!types.hasOwnProperty(type)) types[type] = 0;
    types[type]++;
    if (types[type] === maxCount) maxTypes.push(type);
    if (types[type] > maxCount) {
      maxCount = types[type];
      maxTypes = [type];
    }
  });
  return maxTypes.sort();
}
