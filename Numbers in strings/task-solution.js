const solve = (s) => Math.max.apply(null, s.match(/\d+/g).map(Number));
