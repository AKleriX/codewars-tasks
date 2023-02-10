function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    const strArr = [...integersList.join('')];
    let counter = strArr.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {});
    return digitsList.map((n) => [n, counter[n] || 0]);
  };
}
