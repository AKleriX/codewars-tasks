Array.prototype.toString = function () {
  function arrayToString(arr) {
    return (
      '[' +
      arr
        .map((element) => {
          if (Array.isArray(element)) return arrayToString(element);
          else if (typeof element === 'string') return `'${element}'`;
          else return element.toString();
        })
        .join(',') +
      ']'
    );
  }

  return arrayToString(this);
};
