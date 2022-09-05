function generationLoss(orig, copy) {
  const order = ['#', '+', ':', '.', ' '];
  for (let i = 0; i < orig.length; i++) {
    if (orig[i] !== copy[i])
      if (
        !/[a-z.#+:]/i.test(orig[i]) ||
        /[A-Z]/.test(copy[i]) ||
        (copy[i] !== orig[i].toLowerCase() && order.indexOf(orig[i]) >= order.indexOf(copy[i]))
      )
        return false;
  }
  return copy.length === orig.length;
}
