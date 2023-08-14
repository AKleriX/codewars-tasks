const to24hourtime = (hour, minute, period) => {
  const h = period === 'am' ? (hour % 12).toString() : ((hour % 12) + 12).toString();
  return h.padStart(2, '0') + minute.toString().padStart(2, '0');
};
