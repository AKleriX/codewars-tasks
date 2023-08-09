const getPercentage = (sent, limit = 1000) => {
  const p = Math.floor((sent / limit) * 100);
  return sent === 0 ? 'No e-mails sent' : p >= 100 ? 'Daily limit is reached' : p + '%';
};
