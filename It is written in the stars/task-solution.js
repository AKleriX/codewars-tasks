const starSign = (date) => {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 ** 2 * 24));
  if ((!(date.getFullYear() % 4) && date.getFullYear() % 100) || !(date.getFullYear() % 400))
    return dayOfYear < 21 || dayOfYear > 356
      ? 'Capricorn'
      : dayOfYear < 51
      ? 'Aquarius'
      : dayOfYear < 81
      ? 'Pisces'
      : dayOfYear < 112
      ? 'Aries'
      : dayOfYear < 143
      ? 'Taurus'
      : dayOfYear < 174
      ? 'Gemini'
      : dayOfYear < 205
      ? 'Cancer'
      : dayOfYear < 237
      ? 'Leo'
      : dayOfYear < 268
      ? 'Virgo'
      : dayOfYear < 298
      ? 'Libra'
      : dayOfYear < 328
      ? 'Scorpio'
      : 'Sagittarius';

  return dayOfYear < 21 || dayOfYear > 356
    ? 'Capricorn'
    : dayOfYear < 51
    ? 'Aquarius'
    : dayOfYear < 80
    ? 'Pisces'
    : dayOfYear < 111
    ? 'Aries'
    : dayOfYear < 142
    ? 'Taurus'
    : dayOfYear < 173
    ? 'Gemini'
    : dayOfYear < 204
    ? 'Cancer'
    : dayOfYear < 236
    ? 'Leo'
    : dayOfYear < 267
    ? 'Virgo'
    : dayOfYear < 297
    ? 'Libra'
    : dayOfYear < 327
    ? 'Scorpio'
    : 'Sagittarius';
};
