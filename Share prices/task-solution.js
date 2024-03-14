const sharePrice = (invested, changes) =>
  changes.reduce((v, c) => (1 + c / 100) * v, invested).toFixed(2);
