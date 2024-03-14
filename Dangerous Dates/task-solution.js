const nextFiveDays = (date) => {
  const dates = [];

  for (let i = 0; i < 5; i++) {
    let newDate = new Date(date.toString());
    newDate.setDate(date.getDate() + i + 1);
    dates.push(newDate.getMonth() + 1 + '/' + newDate.getDate() + '/' + newDate.getFullYear());
  }

  return dates.join(', ');
};
