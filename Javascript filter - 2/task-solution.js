const roomMates = (rooms, floor) =>
  rooms.filter((n, i) => i >= (floor - 1) * 6 && i < floor * 6 && n.length);
