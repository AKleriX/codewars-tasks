const gracefulTipping = (bill) => {
  let tb = Math.ceil(bill * 1.15),
    tenth = Math.floor(Math.log10(tb)) - 1,
    mod = 5 * 10 ** tenth;
  return tb % mod && tb > 10 ? mod * Math.ceil(tb / mod) : tb;
};
