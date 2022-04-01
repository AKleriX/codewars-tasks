function common(a, b, c) {
  let sortA = [...a].sort(getSortArray),
    sortB = [...b].sort(getSortArray),
    sortC = [...c].sort(getSortArray),
    lastIndexB = 0,
    lastIndexC = 0;
  return sortA
    .filter((num) => {
      if (sortB.indexOf(num, lastIndexB) !== -1 && sortC.indexOf(num, lastIndexC) !== -1) {
        lastIndexB = sortB.indexOf(num, lastIndexB) + 1;
        lastIndexC = sortC.indexOf(num, lastIndexC) + 1;
        return true;
      }
      return false;
    })
    .reduce((sum, num) => sum + num, 0);
}

const getSortArray = (a, b) => a - b;
