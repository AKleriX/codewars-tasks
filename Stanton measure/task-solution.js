const stantonMeasure = (arr) => {
  let oneCounter = arr.filter((n) => n === 1).length;
  return arr.filter((n) => n === oneCounter).length;
};
