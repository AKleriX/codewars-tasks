function sortPhotos(pics) {
  let sortPics = pics
      .map((name) => {
        let dataOfName = name.split('.img');
        return [name, +dataOfName[0], +dataOfName[1]];
      })
      .sort((a, b) => (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1])),
    newPic = sortPics[sortPics.length - 1][1] + '.img' + (sortPics[sortPics.length - 1][2] + 1);
  return sortPics
    .map((data) => data[0])
    .slice(-5)
    .concat([newPic]);
}
