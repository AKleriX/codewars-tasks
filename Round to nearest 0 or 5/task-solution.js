// return the list with all numbers rounded to nearest 0 or 5
const roundToFive = (numbers) => numbers.map((n) => n + (n % 5 > 2.5 ? 5 - (n % 5) : -n % 5));
