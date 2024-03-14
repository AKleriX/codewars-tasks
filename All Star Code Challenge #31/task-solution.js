const helpJesse = (array) =>
  array.map(
    (inst) =>
      `Pour ${inst.amount} mL of ${inst.solution} into a ${inst.instrument}${
        inst.note ? ' (' + inst.note + ')' : ''
      }`,
  );
