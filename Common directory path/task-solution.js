function getCommonDirectoryPath(pathes) {
  let currentWay = pathes[0];
  for (let i = 1; i < pathes.length; i++) {
    let tmpWay = pathes[i].slice(0, currentWay.length);
    while (currentWay.length && currentWay !== tmpWay) {
      currentWay = currentWay.replace(/[^/]*\/?$/, '');
      tmpWay = tmpWay.slice(0, currentWay.length);
    }
  }
  return currentWay;
}
