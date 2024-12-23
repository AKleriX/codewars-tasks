Array.prototype.average = function () {
  const parseToNumber = (value) => {
    if (Array.isArray(value)) return value.average();
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  const total = this.reduce((sum, item) => sum + parseToNumber(item), 0);
  return total / this.length;
};
