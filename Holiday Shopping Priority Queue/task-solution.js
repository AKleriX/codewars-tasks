function HolidayPriorityQueue() {
  this.list = [];
}

HolidayPriorityQueue.prototype.addGift = function (gift) {
  let unused = false;
  for (let i = 0; i < this.list.length; i++)
    if (this.list[i].priority < gift.priority) {
      unused = true;
      this.list = [...this.list.slice(0, i), gift, ...this.list.slice(i)];
      break;
    }
  if (!unused) this.list.push(gift);
  return this.list.length;
};

HolidayPriorityQueue.prototype.buyGift = function () {
  let firstEl = this.list.pop();
  return firstEl ? firstEl.gift : '';
};
