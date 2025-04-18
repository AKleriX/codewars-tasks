const iam = (input, depth = 0) =>
  input ? `I am ${'very '.repeat(depth)}${input}` : (nextMood) => iam(nextMood, depth + 1);
