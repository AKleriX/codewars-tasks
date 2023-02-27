const noIfsNoButs = (a, b) =>
  `${a} is ${['smaller', 'equal', 'greater'][Math.sign(a - b) + 1]} ${
    ['than', 'to', 'than'][Math.sign(a - b) + 1]
  } ${b}`;
