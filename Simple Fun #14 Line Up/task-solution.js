function lineUp(commands) {
  const command = {
    L: (p) => (p - 1 >= 0 ? (p - 1) % 4 : 3),
    R: (p) => (p + 1) % 4,
    A: (p) => (p + 2) % 4,
  };
  let positions = [0, 0],
    counter = 0;
  for (let i = 0; i < commands.length; i++) {
    [positions[0], positions[1]] = [
      command[commands[i]](positions[0]),
      command[commands[i] === 'L' ? 'R' : commands[i] === 'R' ? 'L' : 'A'](positions[1]),
    ];
    if (positions[0] === positions[1]) counter++;
  }
  return counter;
}
