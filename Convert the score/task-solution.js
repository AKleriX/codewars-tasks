const scoreboard = (string) => {
  const nums = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let score = string.split(' ').slice(-2);
  return [nums[score[0]], nums[score[1]]];
};
