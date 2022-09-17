'use strict';

const flattenAndSort = (array) =>
  array.reduce((a, subArr) => a.concat(subArr), []).sort((a, b) => a - b);
