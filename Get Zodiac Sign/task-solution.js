const getZodiacSign = (day, month) => {
  const dayOfYear = Math.floor(
    (new Date(2024, month - 1, day) - new Date(2024, 0, 0)) / (1000 * 60 ** 2 * 24),
  );
  return dayOfYear < 20 || dayOfYear > 356
    ? 'Capricorn'
    : dayOfYear < 50
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
