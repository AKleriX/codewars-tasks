function sort(students) {
  return [...students]
    .sort((a, b) => {
      let aFirstLetter = a.fullName.split(' ')[1][0],
        bFirstLetter = b.fullName.split(' ')[1][0];
      return a.gpa !== b.gpa
        ? b.gpa - a.gpa
        : aFirstLetter !== bFirstLetter
        ? aFirstLetter.localeCompare(bFirstLetter)
        : a.age - b.age;
    })
    .map((s) => s.fullName)
    .join();
}
