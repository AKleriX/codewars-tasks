const findCaterer = (budget, people) => {
  const c1 = people * 15,
    c2 = people * 20,
    c3 = people * 30 * (people > 60 ? 0.8 : 1);

  return !people ? -1 : c3 <= budget ? 3 : c2 <= budget ? 2 : c1 <= budget ? 1 : -1;
};
