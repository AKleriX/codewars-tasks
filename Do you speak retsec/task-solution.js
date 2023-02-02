function reverseByCenter(s) {
  let firstHalf = s.slice(0, (s.length / 2) | 0),
    mid = s.slice((s.length / 2) | 0, Math.ceil(s.length / 2)),
    secondHalf = s.slice(Math.ceil(s.length / 2));
  return secondHalf + mid + firstHalf;
}
