const getHonorPath = (honorScore, targetHonorScore) => {
  return {
    '2kyus': honorScore < targetHonorScore ? (targetHonorScore - honorScore) % 2 : undefined,
    '1kyus': honorScore < targetHonorScore ? ((targetHonorScore - honorScore) / 2) | 0 : undefined,
  };
};
