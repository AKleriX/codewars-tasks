const exampleSort = (arr, exampleArr) =>
  [...arr].sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
