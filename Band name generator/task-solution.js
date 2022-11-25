function bandNameGenerator(str) {
  return str[0] === str[str.length - 1]
    ? str[0].toUpperCase() + str.slice(1, -1) + str
    : 'The ' + str[0].toUpperCase() + str.slice(1);
}
