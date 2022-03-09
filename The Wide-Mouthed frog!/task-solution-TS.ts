export const mouthSize = (animal: string): string =>
  /^alligator$/i.test(animal) ? 'small' : 'wide';
