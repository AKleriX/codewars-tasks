function isbnConverter(isbn) {
    let resultIsbn = `978-${isbn.slice(0, 12)}`,
        checkDigit = resultIsbn.replace(/-/g, '').split('').reduce((sum, d, i) => {
          if (i % 2) sum += Number(d) * 3;
          else sum += Number(d);
          return sum;
        }, 0) % 10;
    return `${resultIsbn}${checkDigit === 0 ? 0 : 10 - checkDigit}`;
  }