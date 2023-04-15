function getNewNotes(salary, bills) {
  for (let i = 0; i < bills.length; i++) salary -= bills[i];
  return salary < 0 ? 0 : Math.floor(salary / 5);
}
