const nbrValidTickets = (tickets) => tickets.reduce((s, t) => s + /^[A-Z]\d[A-Z]{4}$/.test(t), 0);
