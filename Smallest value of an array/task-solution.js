const min = (arr, toReturn) =>
  toReturn === 'value' ? Math.min.apply(null, arr) : arr.indexOf(Math.min.apply(null, arr));
