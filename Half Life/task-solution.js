const halfLife = (quantityInitial, quantityRemaining, time) =>
  (time * -Math.log(2)) / Math.log(quantityRemaining / quantityInitial);
