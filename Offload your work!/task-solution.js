function workNeeded(projectMinutes, freelancers) {
  let mins = freelancers.reduce((m, t) => m + t[0] * 60 + t[1], 0);
  return mins >= projectMinutes
    ? 'Easy Money!'
    : `I need to work ${Math.trunc((projectMinutes - mins) / 60)} hour(s) and ${
        (projectMinutes - mins) % 60
      } minute(s)`;
}
