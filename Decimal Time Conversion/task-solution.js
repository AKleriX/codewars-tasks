const toIndustrial = (time) =>
  Math.round(
    ((typeof time === 'number'
      ? time
      : time.split(':').reduce((s, t, i) => (i ? s + +t : +t * 60), 0)) /
      60) *
      100,
  ) / 100;

const toNormal = (time) => {
  const mins = time * 60;
  return `${(mins / 60) | 0}:${Math.round(mins % 60)
    .toString()
    .padStart(2, '0')}`;
};
