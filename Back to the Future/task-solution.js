const backToTheFuture = (str) => {
  const [day, date, m] = str.split(' '),
    posMonths = {
      January: 'October',
      April: 'July',
      September: 'December',
      February: 'March',
      March: 'November',
    };
  if (!posMonths[m] || (date === '31' && m !== 'January'))
    return `Doc, I can't get back to the future!`;
  return `I'm leaving here on ${day} ${date} ${posMonths[m]}!`;
};
