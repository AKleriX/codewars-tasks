export function howMuchILoveYou(petals: number): string {
  return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][
    (petals - 1) % 6
  ];
}
