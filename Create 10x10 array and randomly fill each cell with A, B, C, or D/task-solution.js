const array10 = (_) =>
  Array.from({ length: 10 }, (_) =>
    [...'ABCDABCDABCDABCDABCD'.slice(getRnd(0, 3)).slice(0, 10)].sort((_) => getRnd(-1, 1)),
  );

const getRnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
