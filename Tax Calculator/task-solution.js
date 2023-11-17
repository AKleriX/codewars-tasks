const taxCalculator = (total) => {
  if (typeof total !== 'number' || total < 0) return 0;
  return (
    Math.round(
      ((total <= 10 ? total / 10 : 1) +
        (total > 10 ? (total <= 20 ? (total - 10) * 0.07 : 0.7) : 0) +
        (total > 20 ? (total <= 30 ? (total - 20) * 0.05 : 0.5) : 0) +
        (total > 30 ? (total - 30) * 0.03 : 0)) *
        100,
    ) / 100
  );
};
