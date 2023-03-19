const isolateIt = (arr) =>
  arr.map((s) => {
    let a = [...s];
    a.splice(Math.floor(s.length / 2), s.length % 2, '|');
    return a.join('');
  });
