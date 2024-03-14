Car.prototype.getNumberOfGears = function getNumberOfGears() {
  return this.engine?.gearbox?.numberOfGears ?? null;
};
