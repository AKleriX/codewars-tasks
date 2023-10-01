const amaroPlan = (pirateNum) => {
  let total = 20 * pirateNum;
  return Array.from({ length: pirateNum }, (_, i) =>
    !i ? total - (Math.ceil(pirateNum / 2) - 1) : !(i % 2) ? 1 : 0,
  );
};
