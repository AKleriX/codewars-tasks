function wordSearch(query, seq) {
  let resArr = seq.filter((str) => str.toLowerCase().includes(query.toLowerCase()));
  return resArr.length ? resArr : ['Empty'];
}
