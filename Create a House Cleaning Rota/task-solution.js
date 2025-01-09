const rota = (rooms) => {
  const result = [],
    length = rooms.length;

  if (length >= 7) {
    const shuffled = rooms.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 7; i++) result.push(shuffled[i % length]);
  } else for (let i = 0; i < 7; i++) result.push(rooms[Math.floor(Math.random() * length)]);

  return result;
};
