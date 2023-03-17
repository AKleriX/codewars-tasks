function colourAssociation(array) {
  return array.map((sa) => {
    let res = {};
    res[sa[0]] = sa[1];
    return res;
  });
}
