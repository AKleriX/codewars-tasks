const robberEncode = (sentence) =>
  sentence.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/gi, (c) => c + (c === c.toUpperCase() ? 'O' : 'o') + c);
