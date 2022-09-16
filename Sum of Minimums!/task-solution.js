const sumOfMinimums = (arr) => arr.reduce((s, r) => s + Math.min.apply(null, r), 0);
