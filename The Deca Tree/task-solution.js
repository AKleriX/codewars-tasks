function tree(trunks) {
  this.trunks = trunks;
  this.branches = trunks * 10;
  this.twigs = trunks * 100;
  this.leaves = trunks * 1000;

  this.chopLeaf = (n) => (this.leaves = this.leaves < n ? 0 : this.leaves - n);
  this.chopTwig = (n) => {
    this.chopLeaf(n * 10);
    this.twigs = this.twigs < n ? 0 : this.twigs - n;
  };
  this.chopBranch = (n) => {
    this.chopTwig(n * 10);
    this.branches = this.branches < n ? 0 : this.branches - n;
  };
  this.chopTrunk = (n) => {
    this.chopBranch(n * 10);
    this.trunks = this.trunks < n ? 0 : this.trunks - n;
  };

  this.describe = () =>
    `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`;
}
