const countDays = (d) => {
  const today = new Date();

  const diffDays = Math.round((d - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'The day is in the past!';
  else if (!diffDays) return 'Today is the day!';

  return `${diffDays} days`;
};
