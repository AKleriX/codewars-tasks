const regularMonths = (currMonth) => {
  const vals = currMonth.split('-'),
    date = new Date(vals[1], +vals[0], 1);
  while (date.getDay() !== 1) date.setMonth(date.getMonth() + 1);
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
};
