export function movie(card: number, ticket: number, perc: number): number {
  let counter: number = 0,
    sysA: number = 0,
    sysB: number = card,
    ticketForB: number = ticket;
  while (Math.ceil(sysB) >= sysA) {
    counter++;
    sysA += ticket;
    ticketForB *= perc;
    sysB += ticketForB;
  }
  return counter;
}
