function getAges(sum, difference) {
  let firstAge = sum / 2 + difference / 2,
    secondAge = sum / 2 - difference / 2;
  if (sum < 0 || difference < 0 || firstAge < 0 || secondAge < 0) return null;
  return [firstAge, secondAge];
}
