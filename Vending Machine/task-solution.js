function VendingMachine(items, money) {
  this.items = [...items];
  this.money = money;
}

VendingMachine.prototype.vend = function (selection, itemMoney) {
  let item = null,
    change = 0;
  for (let i = 0; i < this.items.length; i++)
    if (this.items[i].code === selection) {
      item = this.items[i];
      break;
    }
  if (!item) return `Invalid selection! : Money in vending machine = ${this.money.toFixed(2)}`;
  if (itemMoney < item.price) return 'Not enough money!';
  if (!item.quantity) return `${item.name}: Out of stock!`;
  change = itemMoney - item.price;
  this.money += item.price;
  item.quantity--;
  if (!change) return `Vending ${item.name}`;
  return `Vending ${item.name} with ${change.toFixed(2)} change.`;
};
