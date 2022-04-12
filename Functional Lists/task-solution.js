function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function () {
  return '()';
};
EmptyList.prototype.isEmpty = function () {
  return true;
};
EmptyList.prototype.length = function () {
  return 0;
};
EmptyList.prototype.push = function (x) {
  return new ListNode(x, this);
};
EmptyList.prototype.remove = function (x) {
  return this;
};
EmptyList.prototype.append = function (xs) {
  return xs;
};

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function () {
  return false;
};

ListNode.prototype.toString = function () {
  let vals = [this.value],
    next = this.next;
  while (!(next instanceof EmptyList)) {
    vals.push(next.value);
    next = next.next;
  }
  return '(' + vals.join(' ') + ')';
};

ListNode.prototype.head = function () {
  return this.value;
};

ListNode.prototype.tail = function () {
  return this.next;
};

ListNode.prototype.length = function () {
  let ln = 1,
    next = this.next;
  while (!(next instanceof EmptyList)) {
    ln++;
    next = next.next;
  }
  return ln;
};

ListNode.prototype.push = function (x) {
  return new ListNode(x, this);
};

ListNode.prototype.remove = function (x) {
  let remVals = [],
    clone = 0,
    unchangedHead = this,
    next = this;
  while (!(next instanceof EmptyList)) {
    if (next.value === x) {
      clone = remVals.length;
      unchangedHead = next.next;
    } else remVals.push(next.value);
    next = next.next;
  }
  remVals = remVals.slice(0, clone);
  while (remVals.length > 0) unchangedHead = unchangedHead.push(remVals.pop());
  return unchangedHead;
};

ListNode.prototype.append = function (xs) {
  let thisVals = [],
    next = this;
  while (!(next instanceof EmptyList)) {
    thisVals.push(next.value);
    next = next.next;
  }
  let newNode = xs.push(thisVals.pop());
  while (thisVals.length > 0) newNode = newNode.push(thisVals.pop());
  return newNode;
};
