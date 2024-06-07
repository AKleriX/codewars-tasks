const smile = (text) =>
  text.replace(/([:;=])([-~]?)([\(\[])/g, (m, p1, p2, p3) => p1 + p2 + (p3 === '(' ? ')' : ']'));
