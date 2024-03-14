const dayPlan = (hours, tasks, duration) => {
  if (hours * 60 < duration * tasks) return "You're not sleeping tonight!";
  let restLength = Math.round((hours * 60 - duration * tasks) / (tasks - 1));
  return Array.from({ length: 2 * tasks - 1 }, (_, i) => (!(i % 2) ? duration : restLength));
};
