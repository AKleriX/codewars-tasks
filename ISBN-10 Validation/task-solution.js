function validISBN10(isbn) {
  return /^[0-9]{9}([0-9]|X)$/.test(isbn) && 
    !([...isbn].reduce((sum, n, i) => n === 'X' ? sum + 10 * (i + 1) : sum + Number(n) * (i + 1), 0) % 11);
}