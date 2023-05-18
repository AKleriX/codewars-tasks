const readZalgo = (zalgotext) =>
  [...zalgotext]
    .filter((s) => s.charCodeAt(0) < 123)
    .join('')
    .trim();
