function fizzBuzzCuckooClock(time) {
  let [hours, mins] = time.split(':').map(Number);
  if (!mins) return Array.from({ length: hours % 12 ? hours % 12 : 12 }, (_) => 'Cuckoo').join(' ');
  if (mins === 30) return 'Cuckoo';
  return !(mins % 3) && !(mins % 5)
    ? 'Fizz Buzz'
    : !(mins % 3)
    ? 'Fizz'
    : !(mins % 5)
    ? 'Buzz'
    : 'tick';
}
