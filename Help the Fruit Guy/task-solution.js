const removeRotten = (bagOfFruits) =>
  bagOfFruits ? bagOfFruits.map((f) => f.replace('rotten', '').toLowerCase()) : [];
