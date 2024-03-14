const recurrence = (base, formula, term) =>
  term === 1 ? base : formula(recurrence(base, formula, term - 1));
