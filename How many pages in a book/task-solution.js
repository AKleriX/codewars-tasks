function amountOfPages(summary) {
  let currentNums = '',
    page = 0;
  while (currentNums.length < summary) {
    page++;
    currentNums += page;
  }
  return page;
}
