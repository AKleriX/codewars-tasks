const mostFrequentDays = (year) => {
  const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let daysFreq = [];
  daysFreq.push(daysNames[new Date(`01-01-${year}`).getDay()]);
  if (!(year % 4)) daysFreq.push(daysNames[new Date(`01-02-${year}`).getDay()]);
  return (daysFreq[0] === 'Sunday' && daysFreq.length > 1) ? [daysFreq[1], daysFreq[0]] : daysFreq;
}