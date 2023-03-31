function expressionOut(expr) {
  const nums = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
    sepExpr = expr.split(' ');
  if (
    +sepExpr[0] < 1 ||
    +sepExpr[2] < 1 ||
    nums.length < +sepExpr[0] ||
    nums.length < +sepExpr[2] ||
    !OPERATORS[sepExpr[1]]
  )
    return "That's not an operator!";
  return nums[+sepExpr[0] - 1] + ' ' + OPERATORS[sepExpr[1]] + nums[+sepExpr[2] - 1];
}
