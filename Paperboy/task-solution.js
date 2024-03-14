const cheapestQuote = (newspapers) => {
  return (
    Math.round(
      (Math.floor(newspapers / 40) * 3.85 +
        Math.floor((newspapers % 40) / 20) * 1.93 +
        Math.floor(((newspapers % 40) % 20) / 10) * 0.97 +
        Math.floor((((newspapers % 40) % 20) % 10) / 5) * 0.49 +
        Math.floor((((newspapers % 40) % 20) % 10) % 5) * 0.1) *
        100,
    ) / 100
  );
};
