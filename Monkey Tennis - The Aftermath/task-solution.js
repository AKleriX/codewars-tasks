const ballCollector = (detritus) => ({
  weight: detritus.reduce((sum, w) => sum + (w === 58 ? w : 0), 0),
});
