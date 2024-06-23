const repeatAdjacent = (s) => (s.replace(/(.)\1+/g, ' ').match(/(\s{2,})/g) || []).length;
