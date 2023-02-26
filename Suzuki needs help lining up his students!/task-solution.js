function lineupStudents(students) {
  let names = students.split(' ');
  return names.sort((a, b) => (a.length === b.length ? b.localeCompare(a) : b.length - a.length));
}
