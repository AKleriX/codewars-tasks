function sortThePile(pileOfTowels, weeklyUsedTowels) {
  let maxUsed = Math.max.apply(null, weeklyUsedTowels);
  return maxUsed
    ? [
        ...pileOfTowels.slice(0, -maxUsed),
        ...pileOfTowels.slice(-maxUsed).sort((a, b) => b.localeCompare(a)),
      ]
    : pileOfTowels;
}
