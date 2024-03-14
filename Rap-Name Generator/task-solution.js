const rapNameGen = (dob) => {
  const dict = ['0ero', '1ne', '2wo', '3hree', '4our', '5ive', '6ix', '7even', '8ight', '9ine'],
    [d, m, y] = dob.split('.').map((n) => Math.round([...n].reduce((s, d) => s + +d, 0) / 2));
  return dict[d] + ' ' + dict[y];
};
