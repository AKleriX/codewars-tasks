function sortAnimal(animal) {
  if (animal === null) return null;
  return [...animal].sort((a, b) => {
    if (a.numberOfLegs !== b.numberOfLegs) return a.numberOfLegs - b.numberOfLegs;
    return a.name.localeCompare(b.name);
  });
}
