const maxDiff = (list) =>
  list.length > 1 ? Math.max.apply(null, list) - Math.min.apply(null, list) : 0;
