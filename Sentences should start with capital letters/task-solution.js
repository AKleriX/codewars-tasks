const fix = (paragraph) =>
  paragraph
    .split('. ')
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
    .join('. ');
