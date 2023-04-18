class Arith {
  nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'tventy',
  ];

  constructor(num) {
    this.num = this.nums.indexOf(num);
  }

  add(num) {
    return this.nums[this.num + this.nums.indexOf(num)];
  }
}
