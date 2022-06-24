const largestArrangement = (array) => +array.sort((a, b) => '' + b + a - ('' + a + b)).join('');
