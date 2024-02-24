Array.prototype.join = function (j = ',') {
  return this.reduce((s, el, i) => (!i ? el : `${s}${j}${el}`), '');
};

const semicolonSeparationToCommaSeparation = (input) => input.split(';').join(',');
