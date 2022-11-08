const sumOfIntegersInString = (s) => (s.match(/\d+/g) || []).reduce((sum, n) => sum + +n, 0);
