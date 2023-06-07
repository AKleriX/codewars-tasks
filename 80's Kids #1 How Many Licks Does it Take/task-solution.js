const totalLicks = (env) => {
  let totalAmount = Object.values(env).reduce((l, c) => l + c, 252),
    hardestChallenge = '';
  for (let i in env) if (env[i] > 0 && env[i] > (env[hardestChallenge] || -1)) hardestChallenge = i;
  return `It took ${totalAmount} licks to get to the tootsie roll center of a tootsie pop.${
    hardestChallenge.length > 0 ? ` The toughest challenge was ${hardestChallenge}.` : ''
  }`;
};
