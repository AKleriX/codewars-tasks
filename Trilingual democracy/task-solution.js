const trilingualDemocracy = (group) => {
  let set = new Set([...group]);
  return set.size === 1
    ? group[0]
    : set.size === 2
    ? [...group].filter((l, i, a) => a.indexOf(l) === a.lastIndexOf(l))[0]
    : 'DFIK'.replace(new RegExp('[' + group + ']', 'g'), '');
};
