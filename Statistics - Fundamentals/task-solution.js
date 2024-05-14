class DataSet {
  constructor(...data) {
    this.data = data;
    this.setMean();
    this.setVar();
  }

  setMean() {
    this.mean = this.data.reduce((s, n) => s + n, 0) / this.data.length;
    return this.mean;
  }

  setVar() {
    this.variance =
      this.data.map((n) => (n - this.mean) ** 2).reduce((s, n) => s + n, 0) / this.data.length;
    this.stdDeviation = Math.sqrt(this.variance);
    return this.variance;
  }
}
