function movie(card, ticket, perc) {
  let counter = 0,
    sysA = 0,
    sysB = card,
    ticketForB = ticket;
  while (Math.ceil(sysB) >= sysA) {
    counter++;
    sysA += ticket;
    ticketForB *= perc;
    sysB += ticketForB;
  }
  return counter;
}
