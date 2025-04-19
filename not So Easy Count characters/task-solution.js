const str = [];

const console = {
  log: (arg) => str.push(arg),
};

const count = () => (str.length ? str.pop().length : 36);
