const loseWeight = (gender, weight, duration) => {
  if (!['M', 'F'].includes(gender)) return 'Invalid gender';
  if (weight <= 0) return 'Invalid weight';
  if (duration <= 0) return 'Invalid duration';
  const p = gender === 'M' ? 1.5 : 1.2;
  for (let i = 0; i < duration; i++) weight = weight - (weight / 100) * p;
  return +weight.toFixed(1);
};
