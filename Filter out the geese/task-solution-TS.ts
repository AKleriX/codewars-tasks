export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter((bird: string) => geese.indexOf(bird) === -1);
}
