const BARK = 'woof woof';
const SLEEP = 'zzzzzzzzz....';

const dog_bark_by_default = (bark = true) => (bark ? BARK : SLEEP);

const dog_bark_only_if_told_so = (bark = false) => (bark ? BARK : SLEEP);

const dog_dont_bark_by_default = (dont_bark = true) => (!dont_bark ? BARK : SLEEP);

const dog_dont_bark_only_if_told_so = (dont_bark = false) => (!dont_bark ? BARK : SLEEP);
