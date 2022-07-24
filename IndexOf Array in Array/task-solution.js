const searchArray = function (arrayToSearch, query) {
  if (
    !Array.isArray(query) ||
    query.length !== 2 ||
    !arrayToSearch.every((a) => Array.isArray(a) && a.length === 2)
  )
    throw 'Error';
  for (let i = 0; i < arrayToSearch.length; i++)
    if (arrayToSearch[i].every((a, i) => a === query[i])) return i;
  return -1;
};
