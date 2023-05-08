const isSantaClausable = (obj) =>
  typeof obj.sayHoHoHo === 'function' &&
  typeof obj.distributeGifts === 'function' &&
  typeof obj.goDownTheChimney === 'function';
