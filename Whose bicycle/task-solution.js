function whoseBicycle(diary1, diary2, diary3) {
  let firstSon = [
      'first',
      Object.values(diary1).reduce((s, m) => s + m, 0),
      ageTable['firstSonAge'],
    ],
    secondSon = [
      'second',
      Object.values(diary2).reduce((s, m) => s + m, 0),
      ageTable['secondSonAge'],
    ],
    thirdSon = ['third', Object.values(diary3).reduce((s, m) => s + m, 0), ageTable['thirdSonAge']];
  return `I need to buy a bicycle for my ${
    [firstSon, secondSon, thirdSon].sort((a, b) =>
      a[1] === b[1] ? a[2] - b[2] : b[1] - a[1],
    )[0][0]
  } son.`;
}
