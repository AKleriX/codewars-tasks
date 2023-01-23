function solution(number) {
  let [A, B, C] = [0, 0, 0];
  for (let i = 1; i < number; i++)
    if (!(i % 3) && !(i % 5)) C++;
    else if (!(i % 3)) A++;
    else if (!(i % 5)) B++;
  return [A, B, C];
}
