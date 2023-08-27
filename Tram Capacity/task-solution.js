const tram = (stops, descending, onboarding) => {
  let max = 0,
    current = 0;
  for (let i = 0; i < stops; i++) {
    current = current - descending[i] + onboarding[i];
    max = max < current ? current : max;
  }
  return max;
};
