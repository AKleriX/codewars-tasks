const spanishSent = (arr) => {
  const counter = arr.reduce(
    (c, s) =>
      (s[0] === '¿' && s.slice(-1) === '?') || (s[0] === '¡' && s.slice(-1) === '!') ? ++c : c,
    0,
  );
  return `¡${counter} spanish sentence${counter === 1 ? '' : 's'} here and hasta la vista, baby!`;
};
