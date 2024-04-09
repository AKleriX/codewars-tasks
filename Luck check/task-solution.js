const luckCheck = (ticket) => {
  let leftPart = ticket.slice(0, ticket.length / 2),
    rightPart = ticket.slice(Math.ceil(ticket.length / 2));
  if (!/^\d+$/.test(ticket)) throw new Error('Wrong symbols');
  return [...leftPart].reduce(getSum, 0) === [...rightPart].reduce(getSum, 0);
};

const getSum = (s, v) => s + +v;
