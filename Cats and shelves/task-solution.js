function solution(start, finish) {
  let counter = 0;
  while (start < finish) {
    if (start + 3 <= finish) start += 3;
    else start++;
    counter++;
  }
  return counter;
}
