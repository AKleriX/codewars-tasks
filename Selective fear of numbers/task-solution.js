const AmIAfraid = function (day, num) {
  const dayRules = {
    Monday: (n) => n === 12,
    Tuesday: (n) => n > 95,
    Wednesday: (n) => n === 34,
    Thursday: (n) => n === 0,
    Friday: (n) => n % 2 === 0,
    Saturday: (n) => n === 56,
    Sunday: (n) => n === 666 || n === -666,
  };
  return dayRules[day](num);
};
