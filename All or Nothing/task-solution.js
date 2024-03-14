const possiblyPerfect = (key, answers) =>
  answers.every((a, i) => key[i] === '_' || a === key[i]) ||
  answers.every((a, i) => key[i] === '_' || a !== key[i]);
