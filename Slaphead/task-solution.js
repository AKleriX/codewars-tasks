function bald(x) {
  const names = ['Clean!', 'Unicorn!', 'Homer!', 'Careless!', 'Careless!', 'Careless!'],
    counter = x.split('/').length - 1;
  return ['-'.repeat(x.length), counter > 5 ? 'Hobo!' : names[counter]];
}
