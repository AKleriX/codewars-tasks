function extractIds(data) {
  let allIds = [];
  const idSearcher = (obj) => {
    let ids = [];
    for (let key in obj) {
      if (key === 'id') ids.push(obj[key]);
      else if (key === 'items') obj[key].forEach((o) => (ids = ids.concat(idSearcher(o))));
    }
    return ids;
  };
  allIds = idSearcher(data);
  return allIds;
}
