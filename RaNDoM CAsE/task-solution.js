const randomCase = (x) =>
  [...x].map((s) => (Math.round(Math.random()) % 2 ? s.toUpperCase() : s.toLowerCase())).join('');
