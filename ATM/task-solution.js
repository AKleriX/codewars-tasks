function solve(n) {
  let counter = 0;
  while (n >= 10) {
    counter++;
    if (n >= 500) n -= 500;
    else if (n >= 200) n -= 200;
    else if (n >= 100) n -= 100;
    else if (n >= 50) n -= 50;
    else if (n >= 20) n -= 20;
    else if (n >= 10) n -= 10;
  }
  return !n ? counter : -1;
}
