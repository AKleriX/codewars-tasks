const madShout = (sidewalk) => {
  const dif = Math.abs(sidewalk.indexOf('Y') - sidewalk.indexOf('F'));
  return `Oi${'i'.repeat((dif - 1) / 2)} F!`;
};
